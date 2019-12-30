'use strict';

const create = function (context) {
  return {
    Literal(node) {
      if (node.value === 13 || node.value === '13') {
        context.report({
          node,
          message: 'The use of the number `13` is a bad omen. Use a different number.'
        });
      }
    },
    Identifier(node) {
      if (node.name.includes('13')) {
        context.report({
          node,
          message: 'Name contains the number 13. It is a bad omen. Use a different name.'
        });
      }
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of number `13`. It is a bad omen.',
      recommended: 'error',
      url: 'https://github.com/gurov/eslint-plugin-superstition/tree/master/docs/rules/no-number-13.md'
    }
  }
};
