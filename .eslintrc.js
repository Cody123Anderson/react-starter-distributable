module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  extends: 'eslint:recommended',
  installedESLint: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    indent: ['error', 2, {'SwitchCase': 1}],
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    "jsx-a11y/img-redundant-alt": [ 'error', {
      components: ['Image'],
      words: [ 'imagen', 'Foto' ],
    }],
    'jsx-a11y/no-access-key': 'error',
    'react/no-string-refs': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', 80],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-no-bind': ['error', { 'allowArrowFunctions': true }],
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    semi: ['error', 'always']
  }
};
