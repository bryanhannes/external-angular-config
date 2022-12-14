module.exports = {
  semi: true,
  singleQuote: true,
  useTabs: false,
  bracketSpacing: true,
  tabWidth: 2,
  trailingComma: 'all',

  printWidth: 120,
  bracketSameLine: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  endOfLine: 'auto',

  overrides: [
    {
      files: '**/*.html',
      options: {
        singleQuote: false,
      },
    },
  ],
};
