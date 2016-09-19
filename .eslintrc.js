module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/no-unresolved': 0,
    // allow debugger during development
    'comma-dangle': 'off',
    'indent': 'off',
    'semi': 'off',
    'no-multiple-empty-lines': 'off',
    'spaced-comment': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off'
  }
};