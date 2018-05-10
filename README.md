# vue-grid-styled

![Npm badge](https://img.shields.io/npm/v/vue-grid-styled.svg)

> Vue.js port of @jxnblk's React library, [grid-styled](https://github.com/jxnblk/grid-styled)

## Installation

```shell
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

## Import & Install

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

## Component Usage

`vue-grid-styled` tries to emulate the [grid-styled API](https://github.com/jxnblk/grid-styled#box-) as closely as possible. Check it out for comprehensive documentation.

One exception is that the `<v-box>` component exposes a `tag` prop that you can use to programatically assign a HTML tag (e.g., "div", "section").

In a nutshell, replace the JSX syntax with Vue "binding" syntax and you should be good to go! Here are a few clarifying examples.

#### Examples

```jsx
// Grid-Styled JSX: Pixel Width
<Box width={256} />
```

```html
<!-- VUE: Pixel Width -->
<v-box :width="256" tag="section" />
```

```jsx
// JSX: Responsive Widths
<Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 6]} />
```

```html
<!-- VUE: Responsive widths -->
<v-box
  tag="main"
  :width="[
    1/2,
    1/3,
    1/4,
    1/6
  ]"
/>
```

```html
<!-- Altogther now! -->
<v-flex flexWrap="wrap" maxWidth="960px" mx="auto">
  <v-box :width="[1, 1/2]" :px="[0, 1]" :mb="2">
    <v-box bg="aliceblue" :py="4"/>
  </v-box>
  <v-box :width="[1, 1/2]" :px="[0, 1]" :mb="2">
    <v-box bg="aliceblue" :py="4"/>
  </v-box>
</v-flex>
```

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
