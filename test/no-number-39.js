import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/no-number-39';

const ruleTester = avaRuleTester(test, {
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
});

const errorNumber = {
  ruleId: 'no-number-39',
  message: 'The use of the number `39` is a bad omen. Use a different number.'
};

const errorName = {
  ruleId: 'no-number-39',
  message: 'Name contains the number 39. It is a bad omen. Use a different name.'
};

ruleTester.run('no-number-39', rule, {
  valid: [
    'const a = 8;'
  ],
  invalid: [
    {
      code: `const a = 39;`,
      errors: [errorNumber]
    },
    {
      code: `if (a === 39) {}`,
      errors: [errorNumber]
    },
    {
      code: `const myVar39 = 5;`,
      errors: [errorName]
    }
  ]
});
