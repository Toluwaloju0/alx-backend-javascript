module.exports = {
  env: {
	  browser: false,
	  es6: true,
	  jest: true,
	  'jest/globals': true
  },
  extends: [
	  'airbnb-base',
	  'plugin:jest/all',
	  'plugin:jest/recommended'
  ],
  globals: {
	  Atomics: 'readonly',
	  SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
	  ecmaVersion: 2020,
	  sourceType: 'module',
	  project: ['./tsconfig.json', './.eslintrc.js'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  //plugins: ['jest'],
  rules: {
	  'no-console': 'off',
	  'no-shadow': 'off',
	  'no-unused-vars': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',
	  'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
	  ]
  },
  overrides: [
	  {
      files: ['*.js'],
      excludedFiles: ['babel.config.js', '.eslintrc.js' ],
	  }
  ]
};
