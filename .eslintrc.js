module.exports = {
  extends: './node_modules/@toptal/davinci-syntax/src/configs/.eslintrc',
  plugins: ['sort-imports-es6-autofix', 'sort-keys-fix'],
  rules: {
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/interface-name-prefix': [
      'warn',
      { prefixWithI: 'never' }
    ],
    'react/jsx-props-no-spreading': 'warn',
    'id-length': 'warn',
    'max-lines': 'warn',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    complexity: ['error', 10]
  }
}
