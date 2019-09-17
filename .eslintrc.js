module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    BUILD_INFO: 'readonly',
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
