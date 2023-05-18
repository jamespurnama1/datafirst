module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
