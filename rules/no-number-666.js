'use strict';

const create = function (context) {
  return {
    Literal(node) {
      if (node.value.toString().includes('666')) {
        context.report({
          node,
          message: 'The value contains the number 666. It is a bad omen. Correct it for God\'s sake.'
        });
      }
    },
    Identifier(node) {
      if (node.name.includes('666')) {
        context.report({
          node,
          message: 'The name contains the number 666. It is a bad omen. Correct it for God\'s sake.'
        });
      }
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of number `666`. It is a bad omen.',
      recommended: 'error',
      url: 'https://github.com/gurov/eslint-plugin-superstition/tree/master/docs/rules/no-number-666.md'
    }
  }
};
