"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const package_json_1 = require("../package.json");
const postcss_1 = require("postcss");
const types_1 = require("./types");
const helpers_1 = require("./helpers");
const plugin = (opts = {}) => {
    const options = {
        hDirection: types_1.HorizontalDirection.LeftToRight,
        vDirection: types_1.VerticalDirection.TopToBottom,
        ...opts
    };
    const hDirValue = (0, helpers_1.horizontalDirectionValue)(options.hDirection);
    const vDirValue = (0, helpers_1.verticalDirectionValue)(options.vDirection);
    const inlineTransform = (0, helpers_1.inlinePropTransform)(options.hDirection);
    const transformToDirValue = (0, helpers_1.transformToDirectionValue)(options.hDirection);
    return {
        postcssPlugin: package_json_1.name,
        Declaration: {
            [types_1.Props.PaddingLeft]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Padding, types_1.Axes.Left),
                });
            },
            [types_1.Props.PaddingRight]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Padding, types_1.Axes.Right),
                });
            },
            [types_1.Props.MarginLeft]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Margin, types_1.Axes.Left),
                });
            },
            [types_1.Props.MarginRight]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Margin, types_1.Axes.Right),
                });
            },
            [types_1.Props.Float]: (decl) => {
                decl.assign({ value: transformToDirValue(decl.value) });
            },
            [types_1.Props.Clear]: (decl) => {
                decl.assign({ value: transformToDirValue(decl.value) });
            },
            [types_1.Props.TextAlight]: (decl) => {
                decl.assign({ value: transformToDirValue(decl.value) });
            },
            [types_1.Props.Left]: (decl) => {
                decl.assign({
                    prop: `inset-inline-${hDirValue(types_1.Axes.Left)}`,
                });
            },
            [types_1.Props.Right]: (decl) => {
                decl.assign({
                    prop: `inset-inline-${hDirValue(types_1.Axes.Right)}`,
                });
            },
            [types_1.Props.BorderLeft]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Left),
                });
            },
            [types_1.Props.BorderRight]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Right),
                });
            },
            [types_1.Props.BorderLeftColor]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Left, "-color"),
                });
            },
            [types_1.Props.BorderLeftWidth]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Left, "-width"),
                });
            },
            [types_1.Props.BorderLeftStyle]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Left, "-style"),
                });
            },
            [types_1.Props.BorderRightColor]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Right, "-color"),
                });
            },
            [types_1.Props.BorderRightWidth]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Right, "-width"),
                });
            },
            [types_1.Props.BorderRightStyle]: (decl) => {
                decl.assign({
                    prop: inlineTransform(types_1.Props.Border, types_1.Axes.Right, "-style"),
                });
            },
            [types_1.Props.BorderBottomLeftRadius]: (decl) => {
                decl.assign({
                    prop: `${types_1.Props.Border}-${vDirValue(types_1.Axes.Bottom)}-${hDirValue(types_1.Axes.Left)}-radius`,
                });
            },
            [types_1.Props.BorderBottomRightRadius]: (decl) => {
                decl.assign({
                    prop: `${types_1.Props.Border}-${vDirValue(types_1.Axes.Bottom)}-${hDirValue(types_1.Axes.Right)}-radius`,
                });
            },
            [types_1.Props.BorderTopLeftRadius]: (decl) => {
                decl.assign({
                    prop: `${types_1.Props.Border}-${vDirValue(types_1.Axes.Top)}-${hDirValue(types_1.Axes.Left)}-radius`,
                });
            },
            [types_1.Props.BorderTopRightRadius]: (decl) => {
                decl.assign({
                    prop: `${types_1.Props.Border}-${vDirValue(types_1.Axes.Top)}-${hDirValue(types_1.Axes.Right)}-radius`,
                });
            },
            [types_1.Props.Padding]: (decl) => {
                let value = decl.value;
                const [num, data] = (0, helpers_1.marginPaddingParser)(options.hDirection, options.vDirection)(value);
                if (data.left != data.right) {
                    decl.after(new postcss_1.Declaration({
                        prop: `${types_1.Props.Padding}-inline`,
                        value: `${data.left} ${data.right}`,
                    }));
                    decl.after(new postcss_1.Declaration({
                        prop: `${types_1.Props.Padding}-block`,
                        value: `${data.top != data.bottom
                            ? `${data.top} ${data.bottom}`
                            : data.top}`,
                    }));
                    decl.remove();
                }
            },
            [types_1.Props.Margin]: (decl) => {
                let value = decl.value;
                const [num, data] = (0, helpers_1.marginPaddingParser)(options.hDirection, options.vDirection)(value);
                if (data.left != data.right) {
                    decl.after(new postcss_1.Declaration({
                        prop: `${types_1.Props.Margin}-inline`,
                        value: `${data.left} ${data.right}`,
                    }));
                    decl.after(new postcss_1.Declaration({
                        prop: `${types_1.Props.Margin}-block`,
                        value: `${data.top != data.bottom
                            ? `${data.top} ${data.bottom}`
                            : data.top}`,
                    }));
                    decl.remove();
                }
            },
        },
    };
};
exports.plugin = plugin;
exports.plugin.postcss = true;
//# sourceMappingURL=index.js.map