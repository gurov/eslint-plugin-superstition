import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/no-number-4';

const ruleTester = avaRuleTester(test, {
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
});

const errorNumber = {
  ruleId: 'no-number-4',
  message: 'The use of the number `4` is a bad omen. Use a different number.'
};

ruleTester.run('no-number-4', rule, {
  valid: [
    'const a = 7;'
  ],
  invalid: [
    {
      code: `const a = 4;`,
      errors: [errorNumber]
    },
    {
      code: `if (a === 4) {}`,
      errors: [errorNumber]
    }
  ]
});
