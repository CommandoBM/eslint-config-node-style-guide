/*!
 * Copied from https://github.com/felixge/node-style-guide/blob/master/.eslintrc
 */
module.exports = {
  "extends": "eslint:recommended",

  "env": {
    "node": true
  },

  // See http://eslint.org/docs/rules/ for rule descriptions.
  "rules": {
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": 1,
    "curly": 2,
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-statements": [1, 15],
    "max-len": [1, 80],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "no-use-before-define": [2, "nofunc"],
    "no-unused-vars": 1,
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-after-keywords": [2, "always"],
    "space-in-brackets": [2, "never"],
    "space-unary-ops": 2
  }
};
