import { name } from "../package.json";
import { Declaration, PluginCreator } from "postcss";
import { Axes, HorizontalDirection, Props, VerticalDirection } from "./types";
import {
  horizontalDirectionValue,
  inlinePropTransform,
  marginPaddingParser,
  transformToDirectionValue,
  verticalDirectionValue,
} from "./helpers";

/**
 * @type {import('postcss').PluginCreator}
 */

namespace plugin {
  export type PluginOptions = {} 
}

const plugin: PluginCreator<plugin.PluginOptions> = (opts={}) => {
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
    postcssPlugin: name,
    Declaration: {
      [Props.PaddingLeft]: (decl) => {
        decl.assign({
          prop: inlineTransform(Props.Padding, Axes.Left),
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
      [Props.TextAlight]: (decl) => {
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
              value: `${
                data.top != data.bottom
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
              value: `${
                data.top != data.bottom
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


export = plugin;