module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'src/setupTests.js',
        '**/*.test.js',
        '**/*.spec.js',
      ],
    }],
  },
};
