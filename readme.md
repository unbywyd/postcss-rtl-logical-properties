# 🌍 postcss-rtl-logical-properties

[![NPM Version](https://img.shields.io/npm/v/postcss-rtl-logical-properties.svg?style=flat-square)](https://www.npmjs.com/package/postcss-rtl-logical-properties)
[![License](https://img.shields.io/npm/l/postcss-rtl-logical-properties.svg?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-unbywyd-blue?style=flat-square&logo=github)](https://github.com/unbywyd/postcss-rtl-logical-properties)

✨ **postcss-rtl-logical-properties** is a **PostCSS plugin** that replaces physical CSS properties (`left`, `right`, `margin-left`, `padding-right`, etc.) with **logical CSS properties** (`start`, `end`, `margin-inline-start`, etc.) for **better RTL support** with reduced CSS size.

## 🚀 Features

- **Converts physical direction properties** to logical properties automatically.
- **Reduces final CSS size** by eliminating redundant LTR/RTL selector duplication.
- **Compatible with `postcss-rtl` and `rtlcss`** for comprehensive RTL support.
- **ESM & CommonJS support** for modern environments.
- **Zero dependencies** – lightweight and fast.

## 📦 Installation

```sh
npm install postcss-rtl-logical-properties --save-dev
```

## 🔧 Usage

### ESM Example

Add the plugin to your PostCSS configuration:

```js
import postcss from "postcss";
import postcssRtlLogicalProperties from "postcss-rtl-logical-properties";
import postcssRTL from "postcss-rtl";

const css = `
.foo {
    margin-left: 10px;
    margin-right: 20px;
    border-radius: 5px 10px 15px 20px;
    }
`;

postcss([
  plugin,
  postcssRTL({
    blacklist: plugin.ignoreDeclarationList,
  }),
])
  .process(css, { from: false })
  .then((result) => {
    console.log(result.css);
  });
```

```js
const postcssRtlLogicalProperties = require("postcss-rtl-logical-properties");

module.exports = {
  plugins: [postcssRtlLogicalProperties()],
};
```

### 🌍 Usage with `postcss-rtl`

For multi-direction support (LTR + RTL) using the `[dir]` attribute:

```js
import postcss from "postcss";
import plugin from "postcss-rtl-logical-properties";
import postcssRTL from "postcss-rtl";

const css = `
.foo {
    margin-left: 10px;
    margin-right: 20px;
    border-radius: 5px 10px 15px 20px;
}
`;

postcss([plugin, postcssRTL({ blacklist: plugin.ignoreDeclarationList })])
  .process(css, { from: false })
  .then((result) => console.log(result.css));
```

### ⚡ CommonJS Example (One-Way Direction Support)

```js
const postcssRtlLogicalProperties = require("postcss-rtl-logical-properties");
const rtlcss = require("rtlcss");
const postcss = require("postcss");

const result = postcss([postcssRtlLogicalProperties(), rtlcss()]).process(`
    .test {
        padding-left: 10px;
        border-right: 20px;
        margin: 10px 1px 10px 29px;
    }
`);

console.log(result.css);
```

## 🛠 Plugin Options

| Option       | Description                                     | Default       |
| ------------ | ----------------------------------------------- | ------------- |
| `hDirection` | Sets the horizontal writing direction (LTR/RTL) | `LeftToRight` |
| `vDirection` | Sets the vertical writing direction (TTB/BTB)   | `TopToBottom` |

## 🎯 Supported Properties

This plugin replaces the following physical properties with their logical counterparts:

- **Padding**: `padding-left`, `padding-right`
- **Margin**: `margin-left`, `margin-right`
- **Border**: `border-left`, `border-right`, `border-left-width`, `border-right-width`, `border-left-color`, `border-right-color`, `border-left-style`, `border-right-style`
- **Radius**: `border-bottom-left-radius`, `border-bottom-right-radius`, `border-top-left-radius`, `border-top-right-radius`
- **Positioning**: `left`, `right`
- **Float & Clear**: `float`, `clear`
- **Text Alignment**: `text-align`

## 🌍 Browser Support

✅ **Global support:** ~89% ([Can I Use](https://caniuse.com/css-logical-props))

❗ **Note**: This plugin does **not** transform complex properties like `transform`, `background-position`, or `border-radius`. For these, use `rtlcss`.

## 🤔 Why Use This Plugin?

Many RTL processors like `postcss-rtlcss` generate **duplicate selectors** with `[dir]` attributes, significantly increasing CSS file size. This plugin **eliminates redundant rules** by leveraging **native logical properties**, reducing final CSS size while maintaining full RTL support.

## 📝 License

MIT License © [Artyom Gorlovetskiy](https://unbywyd.com)

## 🔗 Links

- 📦 **NPM**: [postcss-rtl-logical-properties](https://www.npmjs.com/package/postcss-rtl-logical-properties)
- 🏗 **GitHub**: [unbywyd/postcss-rtl-logical-properties](https://github.com/unbywyd/postcss-rtl-logical-properties)
