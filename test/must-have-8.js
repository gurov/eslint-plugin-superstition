import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/must-have-8';

const ruleTester = avaRuleTester(test, {
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
});

const errorNumber = {
  ruleId: 'must-have-8',
  message: 'At least half of the numbers must be 8. Use more digits 8.'
};

ruleTester.run('must-have-8', rule, {
  valid: [
    'const a = 888883;',
    'const a = 8811;',
    'const a = "";',
    'const a = "Some string";',
    'const a = "test 1 and test 88";'
  ],
  invalid: [
    {
      code: `const a = 333883;`,
      errors: [errorNumber]
    },
    {
      code: `const a = "1986 is good year";`,
      errors: [errorNumber]
    }
  ]
});
