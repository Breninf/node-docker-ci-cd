import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    // ISSO SUBSTITUI O .eslintignore (IGNORA PASTAS PESADAS)
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest, // ISSO RESOLVE OS ERROS DE 'describe' e 'expect'
      },
    },
  },
  pluginJs.configs.recommended,
];