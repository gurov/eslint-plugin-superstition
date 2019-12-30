import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/no-number-13';

const ruleTester = avaRuleTester(test, {
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
});

const error = {
  ruleId: 'no-number-13',
  message: 'The use of number `13` is not allowed. Use a different number'
};

ruleTester.run('no-number-13', rule, {
  valid: [
    'const a = 8;'
  ],
  invalid: [
    {
      code: `const a = 13;`,
      errors: [error]
    },
    {
      code: `if (a === 13) {}`,
      errors: [error]
    }
  ]
});
