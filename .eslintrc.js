module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    // ...
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react/recommended',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  // 动态加载模块不会产生警告，不加这个模块对jsx依然支持良好,后续加入
  // Parsing error: The keyword 'import' is reserved
  parser: 'babel-eslint',
  // fix bug
  // https://github.com/yannickcr/eslint-plugin-react/issues/1955
  settings: {
    react: {
      version: 'detect',
    },
  },
};
