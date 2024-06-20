module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  ignorePatterns: [
    "node_modules/*",
    "public/mockServiceWorker.js",
    "generators/*",
  ],
  extends: ["eslint:recommended"],
  plugins: ["check-file"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: {
        react: { version: "detect" },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              // disables cross-feature imports:
              // eg. src/features/discussions should not import from src/features/comments, etc.
              {
                target: "./src/features/auth",
                from: "./src/features",
                except: ["./auth"],
              },
              // enforce unidirectional codebase:
              // e.g. src/app can import from src/features but not the other way around
              {
                target: "./src/features",
                from: "./src/app",
              },
              // e.g src/features and src/app can import from these shared modules but not the other way around
              {
                target: ["./src/shared/"],
                from: ["./src/features", "./src/app"],
              },
            ],
          },
        ],
        "import/no-cycle": "error",
        "linebreak-style": ["error", "unix"],
        "react/prop-types": "off",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
            ],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "check-file/filename-naming-convention": [
          "error",
          {
            "**/*.{ts,tsx}": "KEBAB_CASE",
          },
          {
            ignoreMiddleExtensions: true,
          },
        ],
      },
    },
    {
      files: ["src/**/!(__tests__)/*"],
      rules: {
        "check-file/filename-naming-convention": [
          "error",
          {
            "**/*.{ts,tsx}": "KEBAB_CASE",
          },
          {
            // ignore the middle extensions of the filename to support filename like babel.config.js or smoke.spec.ts
            ignoreMiddleExtensions: true,
          },
        ],
        "check-file/folder-naming-convention": [
          "error",
          {
            // all folders within src (except __tests__) should be named in kebab-case
            "src/**/!(__tests__)": "KEBAB_CASE",
          },
        ],
      },
    },
  ],
};