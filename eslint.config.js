import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
	{
		// Define o ambiente do projeto
		languageOptions: {
			parser: typescriptParser,
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2025,
			},
		},
		files: ['**/*.ts', '**/*.js'],
		ignores: ['node_modules/**/*', 'dist/**/*', 'docs-out/**/*'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
			prettier: prettierPlugin,
		},
		rules: {
			...typescriptEslint.configs.recommended.rules,
			...prettierConfig.rules,
			'prettier/prettier': ['error'],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'no-debugger': 'error',
			'linebreak-style': ['error', 'unix'],
		},
	},
]
