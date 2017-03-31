module.exports = {
	extends: 'plugin:react/recommended',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es6: true,
		browser: true,
	},
	plugins: [
		'react',
	],

	rules: {
		'jsx-quotes': [ 2, 'prefer-single' ],
		'react/jsx-indent': [ 2, 'tab' ],
		'react/jsx-indent-props': [ 2, 'tab' ],
		'react/jsx-closing-bracket-location': [ 2, 'line-aligned' ],
	},
};
