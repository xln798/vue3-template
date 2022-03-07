module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['info', 'warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /* CUSTOM ESLINT RULES */
    'comma-dangle': ['error', 'always-multiline'],
    'no-undef': 0,
    'no-param-reassign': ['error', { props: false }],
    'max-classes-per-file': 0,
    'max-len': 0,
    'no-mixed-operators': 0,
    'class-methods-use-this': 0,
    'function-paren-newline': ['error', 'multiline'],
    'function-call-argument-newline': ['error', 'consistent'],
    'no-plusplus': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    /* CUSTOM VUE RULES */
    'vue/no-multiple-template-root': 'off',
    'vue/max-len': ['error', {
      code: 120,
      template: 120,
      tabWidth: 2,
      comments: 80,
      ignorePattern: '',
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: true,
    }],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      allowEmptyLines: false,
    }],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false,
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
};
