# postcss-rtl-logical-properties

This plugin is a [PostCSS](https://postcss.org/) plugin that replaces supported horizontal direction properties (LTR/RTL) with logical CSS properties (start/end) to add RTL support.

## Supported properties:

The following properties are supported by this plugin:

```
Padding
PaddingLeft
PaddingRight
Margin
MarginLeft
MarginRight
BorderRight
BorderLeft
BorderLeftWidth
BorderLeftColor
BorderRightWidth
BorderRightColor
BorderLeftStyle
BorderRightStyle
BorderBottomLeftRadius
BorderBottomRightRadius
BorderTopLeftRadius
BorderTopRightRadius
Left
Right
Float
Clear
TextAlight
Border
```

## How it works

This plugin does not replace other plugins such as *rtlcss* - it should be included in your PostCSS plugins before others to replace direction properties with logical properties in the first place.
By replacing direction properties with logical properties, this plugin helps to reduce the final weight of the CSS file and cover almost 80% of the standard properties.

## Usage

To use this plugin, you will need to have [PostCSS](https://postcss.org/) installed. Then, you can install `postcss-rtl-logical-properties` via **npm**:

```
npm install postcss-rtl-logical-properties
```

Then, you can use it in your PostCSS configuration file:

```
const postcssRtlLogicalProperties = require('postcss-rtl-logical-properties');

module.exports = {
  plugins: [
    postcssRtlLogicalProperties()
  ]
}
```

or use with [rtlcss](https://rtlcss.com)

```
const postcssRtlLogicalProperties = require('postcss-rtl-logical-properties');
var rtlcss = require('rtlcss');
const postcss = require('postcss');

const result = postcss([
    postcssRtlLogicalProperties(),
    rtlcss(),
]).process(`
    .test {
        padding-left: 10px;
        border-right: 20px;
        margin: 10px 1px 10px 29px;
        transform: translateX(50%)
    }
`);


console.log(result.css);
/* 
.test {
    padding-inline-start: 10px;
    border-inline-end: 20px;
    margin-block: 10px;
    margin-inline: 29px 1px;
    transform: translateX(-50%)
}
*/
```

## Plugin options
`hDirection`: This option allows you to change the standard direction from LTR to RTL (default: `HorizontalDirection.LeftToRight`)
`vDirection`: This option allows you to change the direction from TopToBottom to BottomToTop (default: `VerticalDirection.TopToBottom`)

## Browser support

This plugin has good browser support and is worth using. According to [Can I Use](https://caniuse.com/css-logical-props), global support is at 89.12%.

**Note** that this plugin does not support complex properties like *transform* or background-position, border-radius and others, for this you will still use rtlcss.

## Why is this needed?

As you know, plugins such as **postcss-rtlcss** process all the properties that are responsible for the direction and generate their own selectors for different versions of LTR and RTL with the addition of the [DIR] attribute before the selector, why is that bad? - This generates duplicates and ultimately affects the size of the file.

### This plugin fully implements rtl support?

* No, [you can see](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) the list of properties that are already supported, this plugin implements this support, but only towards the horizontal writing mode. 

## Conclusion

`postcss-rtl-logical-properties` - is a useful plugin for adding RTL support to your CSS, reducing the final file size and covering a majority of standard properties.