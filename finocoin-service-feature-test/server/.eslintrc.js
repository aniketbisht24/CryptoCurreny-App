module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": [
    "filenames"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true
  },
  "rules": {
    "arrow-parens": ["error", "always"],
    "no-await-in-loop": 2,
    "no-console": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-empty": 2,
    "no-eval": 2,
    "no-extra-semi": 2,
    "no-implicit-globals": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 2,
    "no-label-var": 2,
    "no-lonely-if": 2,
    "no-mixed-requires": 2,
    "no-multi-str": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-restricted-globals": 2,
    "no-tabs": 2,
    "no-trailing-spaces": 2,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-return": 2,
    "no-var": 2,
    "prefer-const": 2,
    "prefer-destructuring": 2,
    "prefer-spread": 2,
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "import/no-unresolved": [ 2, { "commonjs": true, "amd": true}],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0 }],
    "newline-after-var": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],
    "key-spacing": ["error", { "afterColon": true }],
    "line-comment-position": ["error", { "position": "above" }],
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "max-len": ["error", { "code": 160, "comments": 160, "ignoreUrls": true }],
    "max-lines": ["error", {"max": 500, "skipBlankLines": true, "skipComments": true}],
    "no-irregular-whitespace": ["error", { "skipTemplates": true, "skipRegExps": true, "skipComments": true }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "object-curly-spacing": ["error", "always", { "arraysInObjects": true, "objectsInObjects": true }],
    "radix": ["error", "as-needed"],
    "filenames/match-regex": [2, "^[a-z-]+$", true],
    'newline-before-return': 'error',
  }
};
