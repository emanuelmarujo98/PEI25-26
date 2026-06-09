@echo off

start cmd /k "cd backend && npm start"

timeout /t 3 > nul

start cmd /k "npm start"

timeout /t 5 > nul

start http://localhost:3000