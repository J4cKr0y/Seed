@echo off
setlocal enabledelayedexpansion

set input=src\styles\components.css
set output=src\components-styles

if not exist "%output%" mkdir "%output%"

set current=

for /f "usebackq tokens=* delims=" %%A in ("%input%") do (
    set line=%%A

    rem Détecter un titre de composant
    echo !line! | findstr /r /c:"[A-Z][A-Z ]\{1,\}" >nul
    if !errorlevel! == 0 (
        set name=!line!
        set name=!name: =-!
        set name=!name:"=!
        set name=!name:/*=!
        set name=!name:*/=!
        set name=!name:-------------------------------------------------------=!
        set name=!name: =!
        set name=!name:.=!
        set current=%output%\!name!.css
        echo /* !name! */>"!current!"
    ) else (
        if defined current (
            echo !line!>>"!current!"
        )
    )
)

echo.
echo ✔ Tous les composants CSS ont été exportés dans %output%
pause