module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "react"],
  parserOptions: {
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    "react": {
      "version": "detected"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {},
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "arrow-body-style": ["error", "always"],
    "no-unused-expressions": [
      "error",
      {
        "allowTaggedTemplates": true
      }
    ],
    "consistent-return": ["error"],
    "no-console": "off",
    "no-inner-declarations": "off",
    "prettier/prettier": "error",
    "quotes": ["error", "backtick"],
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, {
      "extensions": ["ts", "tsx"]
    }],
    "require-jsdoc": "off",
    "valid-jsdoc": "off"
  }
}