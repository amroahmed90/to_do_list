// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
  ],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
  },
});
