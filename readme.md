# eslint-plugin-superstition

ESLint superstition rules  (no using number 13 and etc.)

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
      "no-var": "error"
    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [no-number-13](docs/rules/no-number-13.md) - Forbid the use of number `13`. It is a bad omen.

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
