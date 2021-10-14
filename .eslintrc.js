module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': 'off',
  },
}
