#!/bin/bash

# Executa o linter
npx eslint ./

# Verifica o resultado do lint
if [ $? -eq 0 ]; then
  STATUS="passed"
  COLOR="brightgreen"
else
  STATUS="failed"
  COLOR="red"
fi

# Gera a badge de acordo com o status
npx badge lint $STATUS :$COLOR @for-the-badge > docs/badges/lint.svg