#!/bin/sh
# Lance le portfolio sur http://localhost:5500 (Mac / Linux)
cd "$(dirname "$0")"
echo "Portfolio lancé sur http://localhost:5500 (Ctrl+C pour arrêter)"
(command -v open >/dev/null && open http://localhost:5500) || (command -v xdg-open >/dev/null && xdg-open http://localhost:5500) &
python3 -m http.server 5500
