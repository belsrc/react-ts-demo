module.exports = {
  extends: ['eslint-config-belsrc'],

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  globals: {
    RootState: 'readonly',
    UserState: 'readonly',
    User: 'readonly',
    TodoItem: 'readonly',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['core', './src/core'],
          ['blocks', './src/components/blocks'],
          ['elements', './src/components/elements'],
          ['pages', './src/components/pages'],
          ['sections', './src/components/sections'],
          ['data', './src/data'],
          ['functions', './src/functions'],
          ['router', './src/router'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },

  rules: {
    'no-unused-vars': [1, { varsIgnorePattern: 'React' }],
  },

  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'import/extensions': [
          2,
          {
            sass: 'always',
          },
        ],
      },
    },
  ],
};
