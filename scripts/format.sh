#!/bin/bash

# Executa o formatter
npx prettier --check './packages/**/*.{js,ts}'

# Verifica o resultado do format
if [ $? -eq 0 ]; then
  STATUS="passed"
  COLOR="brightgreen"
else
  STATUS="failed"
  COLOR="red"
fi

# Gera a badge de acordo com o status
npx badge prettier $STATUS :$COLOR @for-the-badge > docs/badges/prettier.svg