module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // 'standard',
    "standard-with-typescript",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    react: {
      version: "detect",
    },
  },
};
