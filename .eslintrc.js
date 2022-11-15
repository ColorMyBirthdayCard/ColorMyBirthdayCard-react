module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }]
  }
};
