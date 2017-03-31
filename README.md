# Exove ESLint React configuration

React and JSX specific linter rules.

This package is intended to be used with [`eslint-config-exove-nodejs`](https://github.com/Exove/eslint-config-exove-react) which contains generic JavaScript linter rules.

## Installation

	npm install --save-dev eslint-config-exove-react eslint-config-exove-react babel-eslint

Create a file `.eslintrc.js` in the same folder where `package.json` is located with the following contents:

	module.exports = {
		parser: 'babel-eslint',
		extends: [ 'exove-nodejs', 'exove-react' ],
	};
