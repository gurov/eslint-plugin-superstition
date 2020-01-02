'use strict';

const create = function (context) {
  return {
    Literal(node) {
      const numbersAll = node.value.toString().match(new RegExp(/\d/, 'g'));
      const numbers8 = node.value.toString().match(new RegExp(/8/, 'g'));
      if (numbersAll && numbersAll.length > 0 && (numbers8.length < numbersAll.length / 2)) {
        context.report({
          node,
          message: 'At least half of the numbers must be 8. Use more digits 8.'
        });
      }
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Must have to use of the number `8`. It brings good luck.',
      recommended: 'error',
      url: 'https://github.com/gurov/eslint-plugin-superstition/tree/master/docs/rules/must-have-8.md'
    }
  }
};
