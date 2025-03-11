var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default,
  plugName: () => plugName
});
module.exports = __toCommonJS(plugin_exports);
var postcss = __toESM(require("postcss"), 1);
var import_types = require("./types.cjs");
var import_helpers = require("./helpers.cjs");
const { Declaration } = postcss;
const plugName = "postcss-rtl-logical-properties";
const plugin = (opts = {}) => {
  const options = {
    hDirection: import_types.HorizontalDirection.LeftToRight,
    vDirection: import_types.VerticalDirection.TopToBottom,
    ...opts
  };
  const hDirValue = (0, import_helpers.horizontalDirectionValue)(options.hDirection);
  const vDirValue = (0, import_helpers.verticalDirectionValue)(options.vDirection);
  const inlineTransform = (0, import_helpers.inlinePropTransform)(options.hDirection);
  const transformToDirValue = (0, import_helpers.transformToDirectionValue)(options.hDirection);
  return {
    postcssPlugin: plugName,
    Declaration: {
      [import_types.Props.PaddingLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Padding, import_types.Axes.Left)
        });
      },
      [import_types.Props.PaddingRight]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Padding, import_types.Axes.Right)
        });
      },
      [import_types.Props.MarginLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Margin, import_types.Axes.Left)
        });
      },
      [import_types.Props.MarginRight]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Margin, import_types.Axes.Right)
        });
      },
      [import_types.Props.Float]: (decl) => {
        decl.assign({ value: transformToDirValue(decl.value) });
      },
      [import_types.Props.Clear]: (decl) => {
        decl.assign({ value: transformToDirValue(decl.value) });
      },
      [import_types.Props.TextAlign]: (decl) => {
        decl.assign({ value: transformToDirValue(decl.value) });
      },
      [import_types.Props.Left]: (decl) => {
        decl.assign({
          prop: `inset-inline-${hDirValue(import_types.Axes.Left)}`
        });
      },
      [import_types.Props.Right]: (decl) => {
        decl.assign({
          prop: `inset-inline-${hDirValue(import_types.Axes.Right)}`
        });
      },
      [import_types.Props.Top]: (decl) => {
        decl.assign({
          prop: `inset-block-${vDirValue(import_types.Axes.Top)}`
        });
      },
      [import_types.Props.Bottom]: (decl) => {
        decl.assign({
          prop: `inset-block-${vDirValue(import_types.Axes.Bottom)}`
        });
      },
      [import_types.Props.BorderRadius]: (decl) => {
        const values = decl.value.split(/\s+/);
        if (values.length === 4) {
          const topLeft = new Declaration({
            prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Top)}-${hDirValue(import_types.Axes.Left)}-radius`,
            value: values[0]
          });
          const topRight = new Declaration({
            prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Top)}-${hDirValue(import_types.Axes.Right)}-radius`,
            value: values[1]
          });
          const bottomRight = new Declaration({
            prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Bottom)}-${hDirValue(import_types.Axes.Right)}-radius`,
            value: values[2]
          });
          const bottomLeft = new Declaration({
            prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Bottom)}-${hDirValue(import_types.Axes.Left)}-radius`,
            value: values[3]
          });
          decl.after(topLeft);
          decl.after(topRight);
          decl.after(bottomRight);
          decl.after(bottomLeft);
          decl.remove();
        }
      },
      [import_types.Props.BorderLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Left)
        });
      },
      [import_types.Props.BorderRight]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Right)
        });
      },
      [import_types.Props.BorderLeftColor]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Left, "-color")
        });
      },
      [import_types.Props.BorderLeftWidth]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Left, "-width")
        });
      },
      [import_types.Props.BorderLeftStyle]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Left, "-style")
        });
      },
      [import_types.Props.BorderRightColor]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Right, "-color")
        });
      },
      [import_types.Props.BorderRightWidth]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Right, "-width")
        });
      },
      [import_types.Props.BorderRightStyle]: (decl) => {
        decl.assign({
          prop: inlineTransform(import_types.Props.Border, import_types.Axes.Right, "-style")
        });
      },
      [import_types.Props.BorderBottomLeftRadius]: (decl) => {
        decl.assign({
          prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Bottom)}-${hDirValue(
            import_types.Axes.Left
          )}-radius`
        });
      },
      [import_types.Props.BorderBottomRightRadius]: (decl) => {
        decl.assign({
          prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Bottom)}-${hDirValue(
            import_types.Axes.Right
          )}-radius`
        });
      },
      [import_types.Props.BorderTopLeftRadius]: (decl) => {
        decl.assign({
          prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Top)}-${hDirValue(
            import_types.Axes.Left
          )}-radius`
        });
      },
      [import_types.Props.BorderTopRightRadius]: (decl) => {
        decl.assign({
          prop: `${import_types.Props.Border}-${vDirValue(import_types.Axes.Top)}-${hDirValue(
            import_types.Axes.Right
          )}-radius`
        });
      },
      [import_types.Props.Padding]: (decl) => {
        let value = decl.value;
        const [num, data] = (0, import_helpers.marginPaddingParser)(
          options.hDirection,
          options.vDirection
        )(value);
        if (data.left != data.right) {
          decl.after(
            new Declaration({
              prop: `${import_types.Props.Padding}-inline`,
              value: `${data.left} ${data.right}`
            })
          );
          decl.after(
            new Declaration({
              prop: `${import_types.Props.Padding}-block`,
              value: `${data.top != data.bottom ? `${data.top} ${data.bottom}` : data.top}`
            })
          );
          decl.remove();
        }
      },
      [import_types.Props.Margin]: (decl) => {
        let value = decl.value;
        const [num, data] = (0, import_helpers.marginPaddingParser)(
          options.hDirection,
          options.vDirection
        )(value);
        if (data.left != data.right) {
          decl.after(
            new Declaration({
              prop: `${import_types.Props.Margin}-inline`,
              value: `${data.left} ${data.right}`
            })
          );
          decl.after(
            new Declaration({
              prop: `${import_types.Props.Margin}-block`,
              value: `${data.top != data.bottom ? `${data.top} ${data.bottom}` : data.top}`
            })
          );
          decl.remove();
        }
      }
    }
  };
};
plugin.postcss = true;
plugin.ignoreDeclarationList = (0, import_helpers.getIgnoreDeclarationList)();
var plugin_default = plugin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugName
});
