#!/bin/bash

# Compila o TypeScript
npx typedoc

if [ ! -f "docs-out/coverage.json" ]; then
  echo "Erro: Arquivo coverage.json não encontrado."
  exit 1
fi

COVERAGE_PERCENT=$(grep -oP '"percent":\s*\K[0-9]+' docs-out/coverage.json)
if [ -z "$COVERAGE_PERCENT" ]; then
  echo "Erro: Não foi possível obter o valor de cobertura do arquivo coverage.json."
  exit 1
fi

# Define a cor da badge com base na cobertura
if [ "$COVERAGE_PERCENT" -ge 90 ]; then
  COLOR="brightgreen"
elif [ "$COVERAGE_PERCENT" -ge 70 ]; then
  COLOR="yellow"
else
  COLOR="red"
fi

# Gera a badge de acordo com o status
npx badge docs $COVERAGE_PERCENT% :$COLOR @for-the-badge > docs/badges/docs.svg