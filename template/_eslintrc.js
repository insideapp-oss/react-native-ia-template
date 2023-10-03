module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@react-navigation/native',
                importNames: ['useNavigation', 'useTheme'],
                message:
                  'Use typed hooks `useAppNavigation` and  `useAppTheme` instead.',
              },
            ],
          },
        ],
      },
    },
  ],
};
