# eslint-plugin-superstition

ESLint superstition rules (forbid using numbers 13, 666 and etc.)

## Install

```
$ npm install --save-dev eslint eslint-plugin-superstition
```

## Usage

Configure it in `package.json`.

<!-- EXAMPLE_CONFIGURATION:START -->
```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "env": {
      "es6": true
    },
    "plugins": [
      "superstition"
    ],
    "rules": {
      "superstition/no-number-13": "error",
      "superstition/no-number-39": "error",
      "superstition/no-number-4": "error",
      "superstition/no-number-666": "error",
      "no-var": "error"
    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [no-number-13](docs/rules/no-number-13.md) - Forbid the use of number `13`. It is a bad omen.
- [no-number-39](docs/rules/no-number-39.md) - Forbid the use of number `39`. It is a bad omen.
- [no-number-4](docs/rules/no-number-4.md) - Forbid the use of number `4`. It is a bad omen.
- [no-number-666](docs/rules/no-number-666.md) - Forbid the use of number `666`. It is a bad omen.

<!-- RULES:END -->

## Recommended configuration

This plugin exports a [`recommended` configuration](index.js) that enforces good practices.

To enable this configuration, use the `extends` property in your `package.json`.

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "superstition"
    ],
    "extends": "plugin:superstition/recommended"
  }
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

## Notes

Based on [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)

----

MIT © [Pavel Gurov](https://github.com/pgurov)
