module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: false
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react/all',
    'plugin:promise/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'no-console': ['error'],
    'space-before-function-paren': 'off',
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        when: 'multiline'
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line'
      }
    ],
    'react/jsx-max-depth': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx']
      }
    ],
    'react/no-set-state': 'off',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/forbid-component-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-sort-props': 'off',
    'react/sort-default-prop-types': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'getters',
          'setters',
          '/^on.+$/',
          '/^handle.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/forbid-prop-types': [
      'error',
      {
        checkContextTypes: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'newline-after-var': ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  },
  env: {
    jest: true
  },
  globals: {
    fixtures: true
  },
  overrides: [{
    files: ['*.example.jsx'],
    rules: {
      'react/no-multi-comp': 'off',
      'react/require-optimization': 'off',
      'import/no-named-default': 'off',
      'no-console': 'off'
    }
  }]
}
