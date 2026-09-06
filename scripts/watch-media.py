"""Watch Baby1 media (assets/thuy-yen) and auto-rebuild manifest + posters.

Copy or delete dated files (YYYY-MM-DD...) under Baby1/assets/thuy-yen and the
site picks it up on the next browser refresh. Run and keep open:
    python Baby1/scripts/watch-media.py
"""
from __future__ import annotations

import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = ROOT / "Baby1" / "scripts"
WATCH = [ROOT / "Baby1" / "assets" / "thuy-yen" / "images", ROOT / "Baby1" / "assets" / "thuy-yen" / "videos"]
POLL_SECONDS = 4
QUIET_SECONDS = 3


def snapshot() -> dict[str, tuple[float, int]]:
    state: dict[str, tuple[float, int]] = {}
    for folder in WATCH:
        if not folder.exists():
            continue
        for path in folder.rglob("*"):
            if path.is_file():
                try:
                    state[path.as_posix()] = (path.stat().st_mtime, path.stat().st_size)
                except OSError:
                    pass
    return state


def changed_files(before: dict, after: dict) -> tuple[list[str], list[str], list[str]]:
    added = sorted(set(after) - set(before))
    removed = sorted(set(before) - set(after))
    changed = sorted(k for k in set(before) & set(after) if before[k] != after[k])
    return added, changed, removed


def run_builder(args: list[str]) -> None:
    result = subprocess.run([sys.executable, *args], capture_output=True, text=True, cwd=ROOT)
    output = (result.stdout + result.stderr).strip()
    if output:
        print(output, flush=True)
    if result.returncode != 0:
        print(f"[watch] builder failed: {' '.join(args)}", flush=True)


def main() -> None:
    print(f"[watch] Baby1 media watcher on {WATCH}", flush=True)
    print("[watch] Copy/delete dated files (YYYY-MM-DD...) to auto-sync. Ctrl+C to stop.", flush=True)
    before = snapshot()
    while True:
        time.sleep(POLL_SECONDS)
        after = snapshot()
        added, changed, removed = changed_files(before, after)
        if not (added or changed or removed):
            continue
        time.sleep(QUIET_SECONDS)
        after = snapshot()
        added, changed, removed = changed_files(before, after)
        before = after
        for path in added + changed:
            name = Path(path).name
            if name[:4].isdigit() and name[4] == "-":
                continue
            print(f"[watch] BỎ QUA (tên không có ngày YYYY-MM-DD): {path}", flush=True)
        print(f"[watch] thay đổi: +{len(added)} ~{len(changed)} -{len(removed)} → tạo poster thiếu + rebuild manifest", flush=True)
        run_builder([str(SCRIPTS / "build-media-manifest.py"), "--posters"])
        print("[watch] xong — refresh trình duyệt để thấy thay đổi.", flush=True)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("[watch] stopped", flush=True)
