import type { PluginCreator } from "postcss";
import * as postcss from "postcss";
const { Declaration } = postcss;
import { Axes, HorizontalDirection, PluginMethods, Props, VerticalDirection } from "./types.js";
import {
  getIgnoreDeclarationList,
  horizontalDirectionValue,
  inlinePropTransform,
  marginPaddingParser,
  transformToDirectionValue,
  verticalDirectionValue,
} from "./helpers.js";

export const plugName = "postcss-rtl-logical-properties";
/**
 * @type {import('postcss').PluginCreator}
 */

namespace plugin {
  export type PluginOptions = {}
  export type ignoreDeclarationList = Array<Props>
}

const plugin: PluginCreator<plugin.PluginOptions> & PluginMethods = (opts = {}) => {
  const options = {
    hDirection: HorizontalDirection.LeftToRight,
    vDirection: VerticalDirection.TopToBottom,
    ...opts
  }

  const hDirValue = horizontalDirectionValue(options.hDirection);
  const vDirValue = verticalDirectionValue(options.vDirection);
  const inlineTransform = inlinePropTransform(options.hDirection);
  const transformToDirValue = transformToDirectionValue(options.hDirection);
  return {
    postcssPlugin: plugName,
    Declaration: {
      [Props.PaddingLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Padding, Axes.Left)
        });
      },
      [Props.PaddingRight]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Padding, Axes.Right),
        });
      },
      [Props.MarginLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Margin, Axes.Left),
        });
      },
      [Props.MarginRight]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Margin, Axes.Right),
        });
      },
      [Props.Float]: (decl) => {
        decl.assign({ value: transformToDirValue(decl.value) });
      },
      [Props.Clear]: (decl) => {
        decl.assign({ value: transformToDirValue(decl.value) });
      },
      [Props.TextAlign]: (decl) => {
        decl.assign({ value: transformToDirValue(decl.value) });
      },
      [Props.Left]: (decl) => {
        decl.assign({
          prop: `inset-inline-${hDirValue(Axes.Left)}`,
        });
      },
      [Props.Right]: (decl) => {
        decl.assign({
          prop: `inset-inline-${hDirValue(Axes.Right)}`,
        });
      },
      [Props.Top]: (decl) => {
        decl.assign({
          prop: `inset-block-${vDirValue(Axes.Top)}`,
        });
      },
      [Props.Bottom]: (decl) => {
        decl.assign({
          prop: `inset-block-${vDirValue(Axes.Bottom)}`,
        });
      },
      [Props.BorderRadius]: (decl) => {
        const values = decl.value.split(/\s+/);
        if (values.length === 4) {
          const topLeft = new Declaration({
            prop: `${Props.Border}-${vDirValue(Axes.Top)}-${hDirValue(Axes.Left)}-radius`,
            value: values[0],
          });
          const topRight = new Declaration({
            prop: `${Props.Border}-${vDirValue(Axes.Top)}-${hDirValue(Axes.Right)}-radius`,
            value: values[1],
          });
          const bottomRight = new Declaration({
            prop: `${Props.Border}-${vDirValue(Axes.Bottom)}-${hDirValue(Axes.Right)}-radius`,
            value: values[2],
          });
          const bottomLeft = new Declaration({
            prop: `${Props.Border}-${vDirValue(Axes.Bottom)}-${hDirValue(Axes.Left)}-radius`,
            value: values[3],
          });

          decl.after(topLeft);
          decl.after(topRight);
          decl.after(bottomRight);
          decl.after(bottomLeft);

          decl.remove();
        }
      },
      [Props.BorderLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Left),
        });
      },
      [Props.BorderRight]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Right),
        });
      },
      [Props.BorderLeftColor]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Left, "-color"),
        });
      },
      [Props.BorderLeftWidth]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Left, "-width"),
        });
      },
      [Props.BorderLeftStyle]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Left, "-style"),
        });
      },
      [Props.BorderRightColor]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Right, "-color"),
        });
      },
      [Props.BorderRightWidth]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Right, "-width"),
        });
      },
      [Props.BorderRightStyle]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Border, Axes.Right, "-style"),
        });
      },
      [Props.BorderBottomLeftRadius]: (decl) => {
        decl.assign({
          prop: `${Props.Border}-${vDirValue(Axes.Bottom)}-${hDirValue(
            Axes.Left
          )}-radius`,
        });
      },
      [Props.BorderBottomRightRadius]: (decl) => {
        decl.assign({
          prop: `${Props.Border}-${vDirValue(Axes.Bottom)}-${hDirValue(
            Axes.Right
          )}-radius`,
        });
      },
      [Props.BorderTopLeftRadius]: (decl) => {
        decl.assign({
          prop: `${Props.Border}-${vDirValue(Axes.Top)}-${hDirValue(
            Axes.Left
          )}-radius`,
        });
      },
      [Props.BorderTopRightRadius]: (decl) => {
        decl.assign({
          prop: `${Props.Border}-${vDirValue(Axes.Top)}-${hDirValue(
            Axes.Right
          )}-radius`,
        });
      },
      [Props.Padding]: (decl) => {
        let value = decl.value;
        const [num, data] = marginPaddingParser(
          options.hDirection,
          options.vDirection
        )(value);
        if (data.left != data.right) {
          decl.after(
            new Declaration({
              prop: `${Props.Padding}-inline`,
              value: `${data.left} ${data.right}`,
            })
          );
          decl.after(
            new Declaration({
              prop: `${Props.Padding}-block`,
              value: `${data.top != data.bottom
                ? `${data.top} ${data.bottom}`
                : data.top
                }`,
            })
          );
          decl.remove();
        }
      },
      [Props.Margin]: (decl) => {
        let value = decl.value;
        const [num, data] = marginPaddingParser(
          options.hDirection,
          options.vDirection
        )(value);
        if (data.left != data.right) {
          decl.after(
            new Declaration({
              prop: `${Props.Margin}-inline`,
              value: `${data.left} ${data.right}`,
            })
          );
          decl.after(
            new Declaration({
              prop: `${Props.Margin}-block`,
              value: `${data.top != data.bottom
                ? `${data.top} ${data.bottom}`
                : data.top
                }`,
            })
          );
          decl.remove();
        }
      },
    },
  };
};
plugin.postcss = true;
plugin.ignoreDeclarationList = getIgnoreDeclarationList() as Props[];

export default plugin;