@echo off
chcp 936 >nul
title TransFill
cd /d "%~dp0"
echo.
echo  ================================
echo    TransFill - Starting...
echo  ================================
echo.

where node >nul 2>nul
if %errorlevel%==0 (
    echo  [OK] Node.js found
    echo  [OK] Opening http://localhost:8080
    echo.
    echo  Keep this window open.
    echo  Close it to stop the server.
    echo  --------------------------------
    echo.
    start http://localhost:8080
    node server.js
    goto :end
)

echo  [!!] Node.js not found
echo.
echo  Please install Node.js first:
echo  https://nodejs.org/
echo.
echo  Then double-click this file again.

:end
echo.
pause
