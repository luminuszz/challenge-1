module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "plugin:react-hooks/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: ["/^vite/", "module", "/^@app/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "import/no-unresolved": "off",
    "no-nested-ternary": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "react/function-component-definition": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/require-default-props": "off",
    camelcase: "off",
    "react/jsx-props-no-spreading": "off",
  },
};
