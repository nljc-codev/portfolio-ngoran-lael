@echo off
chcp 65001 >nul
title Portfolio N'Goran Laël Jean-Charles
cd /d "%~dp0"
echo.
echo  Portfolio lance sur : http://localhost:5500
echo  (Ferme cette fenetre pour arreter le site)
echo.
start "" http://localhost:5500
where python >nul 2>nul && (python -m http.server 5500 & goto :eof)
where py >nul 2>nul && (py -m http.server 5500 & goto :eof)
echo  Python n'est pas installe. Ouvre simplement index.html (double-clic)
echo  ou utilise l'extension Live Server dans VS Code.
pause
