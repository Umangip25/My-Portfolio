import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'tailwindcss/no-arbitrary-value': 'off',
    }
  }
]);

export default eslintConfig;