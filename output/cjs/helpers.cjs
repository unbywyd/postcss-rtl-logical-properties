var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var helpers_exports = {};
__export(helpers_exports, {
  getIgnoreDeclarationList: () => getIgnoreDeclarationList,
  horizontalDirectionAxes: () => horizontalDirectionAxes,
  horizontalDirectionValue: () => horizontalDirectionValue,
  inlinePropTransform: () => inlinePropTransform,
  marginPaddingParser: () => marginPaddingParser,
  transformToDirectionValue: () => transformToDirectionValue,
  verticalDirectionAxeos: () => verticalDirectionAxeos,
  verticalDirectionValue: () => verticalDirectionValue
});
module.exports = __toCommonJS(helpers_exports);
var import_types = require("./types.cjs");
function horizontalDirectionValue(relativeDir) {
  return (axes) => {
    if (axes == import_types.Axes.Right && relativeDir == import_types.HorizontalDirection.LeftToRight || axes == import_types.Axes.Left && relativeDir == import_types.HorizontalDirection.RightToLeft) {
      return import_types.DirectionValue.End;
    }
    return import_types.DirectionValue.Start;
  };
}
function getIgnoreDeclarationList() {
  const excludeProps = [import_types.Props.Border];
  const filteredProps = Object.values(import_types.Props).filter(
    (prop) => !excludeProps.includes(prop)
  );
  return filteredProps;
}
function horizontalDirectionAxes(relativeDir) {
  return (axes) => {
    if (axes == import_types.Axes.Right && relativeDir == import_types.HorizontalDirection.LeftToRight || axes == import_types.Axes.Left && relativeDir == import_types.HorizontalDirection.RightToLeft) {
      return import_types.Axes.Right;
    }
    return import_types.Axes.Left;
  };
}
function verticalDirectionValue(relativeDir) {
  return (axes) => {
    if (axes == import_types.Axes.Top && relativeDir == import_types.VerticalDirection.TopToBottom || axes == import_types.Axes.Bottom && relativeDir == import_types.VerticalDirection.ButtomToTop) {
      return import_types.DirectionValue.Start;
    }
    return import_types.DirectionValue.End;
  };
}
function verticalDirectionAxeos(relativeDir) {
  return (axes) => {
    if (axes == import_types.Axes.Top && relativeDir == import_types.VerticalDirection.TopToBottom || axes == import_types.Axes.Bottom && relativeDir == import_types.VerticalDirection.ButtomToTop) {
      return import_types.Axes.Top;
    }
    return import_types.Axes.Bottom;
  };
}
function inlinePropTransform(relativeDir) {
  const dirValue = horizontalDirectionValue(relativeDir);
  return (prop, axes, suffix = "") => {
    return `${prop}-${import_types.DirectionType.Inline}-${dirValue(axes)}${suffix}`;
  };
}
function transformToDirectionValue(relativeDir) {
  const dirValue = horizontalDirectionValue(relativeDir);
  return (value) => {
    value = value.trim();
    if (value === import_types.Axes.Left || value === import_types.Axes.Right) {
      value = `${dirValue(value)}`;
    }
    return value;
  };
}
function marginPaddingParser(relativeDir, vRelativeDir) {
  const dirValue = horizontalDirectionAxes(relativeDir);
  const vDirValue = verticalDirectionAxeos(vRelativeDir);
  return (value) => {
    const values = value.trim().split(/\s+/).map((val) => val);
    let props = [
      vDirValue(import_types.Axes.Top),
      dirValue(import_types.Axes.Right),
      vDirValue(import_types.Axes.Bottom),
      dirValue(import_types.Axes.Left)
    ];
    let i = 0;
    const output = props.reduce(
      (acc, prop, index) => {
        if (values.length == 1) {
          acc[prop] = values[0];
        } else if (values.length == 2) {
          acc[prop] = values[i];
          i = i ? 0 : 1;
        } else if (values.length == 4) {
          acc[prop] = values[index];
        } else if (values.length == 3) {
          acc[prop] = values[index] || values[1];
          if (prop === import_types.Axes.Left) {
            acc[prop] = values[1];
          }
        }
        return acc;
      },
      {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      }
    );
    return [values.length, output];
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getIgnoreDeclarationList,
  horizontalDirectionAxes,
  horizontalDirectionValue,
  inlinePropTransform,
  marginPaddingParser,
  transformToDirectionValue,
  verticalDirectionAxeos,
  verticalDirectionValue
});
