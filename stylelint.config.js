/** @typedef {import('stylelint').Config} StylelintConfig */

/** @type {StylelintConfig} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }],
    'selector-class-pattern': null,
    'selector-id-pattern': null,
  },
};
