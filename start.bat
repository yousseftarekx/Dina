@echo off
REM Opens the site with a tiny local server (best experience).
cd /d "%~dp0"
echo Starting the site for Dina...
start "" "http://localhost:8000"
python -m http.server 8000
