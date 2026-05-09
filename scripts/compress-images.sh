#!/usr/bin/env bash
# Recompress images under ./image for web (macOS: sips + cwebp).
# - JPEG: longest edge max 2048px, JPEG ~quality 68 (only replace if smaller).
# - WebP: lossy q78 (only replace if smaller).
# - PNG: skipped (sips round-trip often increases size).

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/image"
MAX_EDGE="${MAX_EDGE:-2048}"
JPEG_Q="${JPEG_Q:-68}"
WEBP_Q="${WEBP_Q:-78}"

compress_jpeg() {
  local f="$1"
  local tmp
  tmp="$(mktemp "${TMPDIR:-/tmp}/imgXXXXXX.jpg")"
  if ! sips -Z "$MAX_EDGE" -s format jpeg -s formatOptions "$JPEG_Q" "$f" --out "$tmp" >/dev/null 2>&1; then
    rm -f "$tmp"
    echo "skip (sips failed): $f" >&2
    return 0
  fi
  local old new
  old=$(stat -f%z "$f")
  new=$(stat -f%z "$tmp")
  if [ "$new" -lt "$old" ]; then
    mv "$tmp" "$f"
    echo "ok jpeg: $f ($old -> $new)"
  else
    rm -f "$tmp"
    echo "skip jpeg (no gain): $f"
  fi
}

compress_webp() {
  local f="$1"
  local tmp
  tmp="$(mktemp "${TMPDIR:-/tmp}/imgXXXXXX.webp")"
  if ! cwebp -q "$WEBP_Q" -mt "$f" -o "$tmp" >/dev/null 2>&1; then
    rm -f "$tmp"
    echo "skip (cwebp failed): $f" >&2
    return 0
  fi
  local old new
  old=$(stat -f%z "$f")
  new=$(stat -f%z "$tmp")
  if [ "$new" -lt "$old" ]; then
    mv "$tmp" "$f"
    echo "ok webp: $f ($old -> $new)"
  else
    rm -f "$tmp"
    echo "skip webp (no gain): $f"
  fi
}

main() {
  if [[ ! -d "$IMG" ]]; then
    echo "missing $IMG" >&2
    exit 1
  fi

  while IFS= read -r -d '' f; do
    compress_jpeg "$f"
  done < <(find "$IMG" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

  while IFS= read -r -d '' f; do
    compress_webp "$f"
  done < <(find "$IMG" -type f -iname '*.webp' -print0)

  echo "done."
}

main "$@"
