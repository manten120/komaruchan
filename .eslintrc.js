module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // ここから下は自分で記述
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    // prettierと競合するeslintの設定をリセット(eslint-config-prettier)
    'prettier',
    // prettierと競合する上記プラグインの設定をリセット
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@typescript-eslint',
    'prefer-arrow',
  ],
  rules: {
    // 関数定義をアロー関数式に統一するためのルール
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    // import React from 'react';でのエラーを回避
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // Next.jsのLinkのなかのaタグにhrefがないときのエラーを回避
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // importするファイルの拡張子を省略した際のエラーを回避
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  // コンポーネントのpropsに型チェックを行うためのpropTypesプロパティの定義を強制するルールをオフ。eslint-config-airbnb で設定されているが、TypeScript の場合は不要なので拡張子が .tsx の場合に無効化するよう設定を上書き
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
