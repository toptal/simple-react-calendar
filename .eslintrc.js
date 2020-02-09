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
    'sort-keys-fix/sort-keys-fix': ['warn', 'asc', { natural: false }],
    'id-length': 'warn',
    'max-lines': 'warn',
    'sort-vars': 'warn',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ]
  }
}
