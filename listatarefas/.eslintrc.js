module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-vars': 0,
    'react/forbid-prop-types': 0,
  },
};
