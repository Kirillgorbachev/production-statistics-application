import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];

export default config;
