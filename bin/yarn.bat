cd ..
del /f /s /q "%cd%\yarn.lock"
rd /s /q "%cd%\node_modules"
yarn
pause