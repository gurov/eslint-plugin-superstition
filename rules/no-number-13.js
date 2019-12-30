'use strict';

const create = function (context) {
  return {
    Literal(node) {
      if (node.value === 13) {
        context.report({
          node,
          message: 'The use of number `13` is not allowed. Use a different number'
        });
      }
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of number `13`.',
      recommended: 'error',
      url: 'https://github.com/gurov/eslint-plugin-superstition/tree/master/docs/rules/no-number-13.md'
    }
  }
};
