#!/bin/bash

rm -rf dist
rm -rf docs/badges/build.svg

# Compila o TypeScript
npx tsc -b

# Verifica o status da compilação
if [ $? -eq 0 ]; then
  STATUS="passed"
  COLOR="brightgreen"
else
  STATUS="failed"
  COLOR="red"
fi

# Gera a badge de acordo com o status
npx badge build $STATUS :$COLOR @for-the-badge > docs/badges/build.svg