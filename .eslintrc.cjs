module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'no-console': 'warn',//без консоль лог
		'quotes': ['error', 'single'],//ковычки в импорте одинарные
		'jsx-quotes': ['error', 'prefer-single'],//ковычки в jsx
		'prefer-const': 'warn',//если переменная не изменяется, лучше сделать ее константой
		'semi': ['warn', 'always'],//везде ставить точку с запятой в конце
		'comma-dangle': ['warn', 'always-multiline'],//в объекте нужно заканчивать запятой
	},
};
