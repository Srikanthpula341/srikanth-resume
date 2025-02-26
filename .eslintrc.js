module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-explicit-any': ['warn', {
      fixToUnknown: false,
      ignoreRestArgs: true
    }]
  }
}; 