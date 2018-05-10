# vue-grid-styled

![Npm badge](https://img.shields.io/npm/v/vue-grid-styled.svg)

> Vue.js port of @jxnblk's React library, grid-styled

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation

```bash
yarn add vue-grid-styled
```

## Default Theme

```js
// Breakpoints
const breakpoints = ["40em", "52em", "64em"];
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// Typographic Scale (numbers are converted to px values)
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

// Spacing Scale (used for margin and padding)
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
```

## Usage

```js
import VueGridStyled from "vue-grid-styled";

// OPTIONAL: Pass a custom theme
const theme = {
  colors: {
    red: "#F22613"
  }
};

Vue.use(VueGridStyled, { theme });
```

## Changelog

See the GitHub [release history](https://github.com/user/repository/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
