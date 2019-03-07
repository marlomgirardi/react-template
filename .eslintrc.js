module.exports = {
  env: {
    browser: true
  },
  extends: [
    "./_tools/eslint/best-practices",
    "./_tools/eslint/errors",
    "./_tools/eslint/es6",
    "./_tools/eslint/node",
    "./_tools/eslint/style",
    "./_tools/eslint/variables",
    "./_tools/eslint/jest",
    "./_tools/eslint/react",
    "./_tools/eslint/react-a11y"
  ].map(require.resolve),

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  }
};
