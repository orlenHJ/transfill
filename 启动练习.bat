@echo off
chcp 65001 >nul
title TransFill 译填
cd /d "%~dp0"
echo.
echo  ╔══════════════════════════════════╗
echo  ║       TransFill 译填 - 启动中    ║
echo  ╚══════════════════════════════════╝
echo.

:: Check Node.js
where node >nul 2>nul
if %errorlevel%==0 (
    echo  [OK] 检测到 Node.js
    echo  [OK] 浏览器将自动打开 http://localhost:8080
    echo.
    echo  保持此窗口打开，关闭窗口即停止服务
    echo  ────────────────────────────────────
    echo.
    start http://localhost:8080
    node server.js
    goto :end
)

echo  [!!] 未检测到 Node.js
echo.
echo  请先安装 Node.js:
echo  下载地址: https://nodejs.org/
echo  安装完成后重新双击此文件即可。
echo.
echo  ────────────────────────────────────
echo  或者你也可以直接双击 index.html 使用
echo  (但AI生成功能可能受浏览器限制)
echo  ────────────────────────────────────

:end
echo.
pause
