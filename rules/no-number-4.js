'use strict';

const create = function (context) {
  return {
    Literal(node) {
      if (node.value === 4 || node.value === '4') {
        context.report({
          node,
          message: 'The use of the number `4` is a bad omen. Use a different number.'
        });
      }
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of number `4`. It is a bad omen.',
      recommended: 'error',
      url: 'https://github.com/gurov/eslint-plugin-superstition/tree/master/docs/rules/no-number-4.md'
    }
  }
};
