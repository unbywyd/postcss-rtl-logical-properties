"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginPaddingParser = exports.transformToDirectionValue = exports.inlinePropTransform = exports.verticalDirectionAxeos = exports.verticalDirectionValue = exports.horizontalDirectionAxes = exports.horizontalDirectionValue = void 0;
const types_1 = require("./types");
function horizontalDirectionValue(relativeDir) {
    return (axes) => {
        if ((axes == types_1.Axes.Right && relativeDir == types_1.HorizontalDirection.LeftToRight) ||
            (axes == types_1.Axes.Left && relativeDir == types_1.HorizontalDirection.RightToLeft)) {
            return types_1.DirectionValue.End;
        }
        return types_1.DirectionValue.Start;
    };
}
exports.horizontalDirectionValue = horizontalDirectionValue;
function horizontalDirectionAxes(relativeDir) {
    return (axes) => {
        if ((axes == types_1.Axes.Right && relativeDir == types_1.HorizontalDirection.LeftToRight) ||
            (axes == types_1.Axes.Left && relativeDir == types_1.HorizontalDirection.RightToLeft)) {
            return types_1.Axes.Right;
        }
        return types_1.Axes.Left;
    };
}
exports.horizontalDirectionAxes = horizontalDirectionAxes;
function verticalDirectionValue(relativeDir) {
    return (axes) => {
        if ((axes == types_1.Axes.Top && relativeDir == types_1.VerticalDirection.TopToBottom) ||
            (axes == types_1.Axes.Bottom && relativeDir == types_1.VerticalDirection.ButtomToTop)) {
            return types_1.DirectionValue.Start;
        }
        return types_1.DirectionValue.End;
    };
}
exports.verticalDirectionValue = verticalDirectionValue;
function verticalDirectionAxeos(relativeDir) {
    return (axes) => {
        if ((axes == types_1.Axes.Top && relativeDir == types_1.VerticalDirection.TopToBottom) ||
            (axes == types_1.Axes.Bottom && relativeDir == types_1.VerticalDirection.ButtomToTop)) {
            return types_1.Axes.Top;
        }
        return types_1.Axes.Bottom;
    };
}
exports.verticalDirectionAxeos = verticalDirectionAxeos;
function inlinePropTransform(relativeDir) {
    const dirValue = horizontalDirectionValue(relativeDir);
    return (prop, axes, suffix = "") => {
        return `${prop}-${types_1.DirectionType.Inline}-${dirValue(axes)}${suffix}`;
    };
}
exports.inlinePropTransform = inlinePropTransform;
function transformToDirectionValue(relativeDir) {
    const dirValue = horizontalDirectionValue(relativeDir);
    return (value) => {
        value = value.trim();
        if (value === types_1.Axes.Left || value === types_1.Axes.Right) {
            value = `${dirValue(value)}`;
        }
        return value;
    };
}
exports.transformToDirectionValue = transformToDirectionValue;
function marginPaddingParser(relativeDir, vRelativeDir) {
    const dirValue = horizontalDirectionAxes(relativeDir);
    const vDirValue = verticalDirectionAxeos(vRelativeDir);
    return (value) => {
        const values = value
            .trim()
            .split(/\s+/)
            .map((val) => val);
        let props = [
            vDirValue(types_1.Axes.Top),
            dirValue(types_1.Axes.Left),
            vDirValue(types_1.Axes.Bottom),
            dirValue(types_1.Axes.Right),
        ];
        let i = 0;
        const output = props.reduce((acc, prop, index) => {
            if (values.length == 1) {
                acc[prop] = values[0];
            }
            else if (values.length == 2) {
                acc[prop] = values[i];
                i = i ? 0 : 1;
            }
            else if (values.length == 4) {
                acc[prop] = values[index];
            }
            else if (values.length == 3) {
                acc[prop] = values[index] || values[1];
            }
            return acc;
        }, {
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
        });
        return [values.length, output];
    };
}
exports.marginPaddingParser = marginPaddingParser;
//# sourceMappingURL=helpers.js.map