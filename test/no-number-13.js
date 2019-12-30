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

const errorNumber = {
  ruleId: 'no-number-13',
  message: 'The use of the number `13` is a bad omen. Use a different number.'
};

const errorName = {
  ruleId: 'no-number-13',
  message: 'Name contains the number 13. It is a bad omen. Use a different name.'
};

ruleTester.run('no-number-13', rule, {
  valid: [
    'const a = 8;'
  ],
  invalid: [
    {
      code: `const a = 13;`,
      errors: [errorNumber]
    },
    {
      code: `if (a === 13) {}`,
      errors: [errorNumber]
    },
    {
      code: `const myVar13 = 5;`,
      errors: [errorName]
    }
  ]
});
