import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/no-number-666';

const ruleTester = avaRuleTester(test, {
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
});

const errorNumber = {
  ruleId: 'no-number-666',
  message: 'The value contains the number 666. It is a bad omen. Correct it for God\'s sake.'
};

const errorName = {
  ruleId: 'no-number-666',
  message: 'The name contains the number 666. It is a bad omen. Correct it for God\'s sake.'
};

ruleTester.run('no-number-666', rule, {
  valid: [
    'const a = 8;'
  ],
  invalid: [
    {
      code: `const a = 666;`,
      errors: [errorNumber]
    },
    {
      code: `if (a === 666) {}`,
      errors: [errorNumber]
    },
    {
      code: `const myVar666 = 5;`,
      errors: [errorName]
    }
  ]
});
