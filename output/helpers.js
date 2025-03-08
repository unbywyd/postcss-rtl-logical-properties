import { Axes, HorizontalDirection, DirectionType, DirectionValue, Props, VerticalDirection, } from "./types.js";
export function horizontalDirectionValue(relativeDir) {
    return (axes) => {
        if ((axes == Axes.Right && relativeDir == HorizontalDirection.LeftToRight) ||
            (axes == Axes.Left && relativeDir == HorizontalDirection.RightToLeft)) {
            return DirectionValue.End;
        }
        return DirectionValue.Start;
    };
}
export function getIgnoreDeclarationList() {
    const excludeProps = [Props.Border];
    const filteredProps = Object.values(Props).filter((prop) => !excludeProps.includes(prop));
    return filteredProps;
}
export function horizontalDirectionAxes(relativeDir) {
    return (axes) => {
        if ((axes == Axes.Right && relativeDir == HorizontalDirection.LeftToRight) ||
            (axes == Axes.Left && relativeDir == HorizontalDirection.RightToLeft)) {
            return Axes.Right;
        }
        return Axes.Left;
    };
}
export function verticalDirectionValue(relativeDir) {
    return (axes) => {
        if ((axes == Axes.Top && relativeDir == VerticalDirection.TopToBottom) ||
            (axes == Axes.Bottom && relativeDir == VerticalDirection.ButtomToTop)) {
            return DirectionValue.Start;
        }
        return DirectionValue.End;
    };
}
export function verticalDirectionAxeos(relativeDir) {
    return (axes) => {
        if ((axes == Axes.Top && relativeDir == VerticalDirection.TopToBottom) ||
            (axes == Axes.Bottom && relativeDir == VerticalDirection.ButtomToTop)) {
            return Axes.Top;
        }
        return Axes.Bottom;
    };
}
export function inlinePropTransform(relativeDir) {
    const dirValue = horizontalDirectionValue(relativeDir);
    return (prop, axes, suffix = "") => {
        return `${prop}-${DirectionType.Inline}-${dirValue(axes)}${suffix}`;
    };
}
export function transformToDirectionValue(relativeDir) {
    const dirValue = horizontalDirectionValue(relativeDir);
    return (value) => {
        value = value.trim();
        if (value === Axes.Left || value === Axes.Right) {
            value = `${dirValue(value)}`;
        }
        return value;
    };
}
export function marginPaddingParser(relativeDir, vRelativeDir) {
    const dirValue = horizontalDirectionAxes(relativeDir);
    const vDirValue = verticalDirectionAxeos(vRelativeDir);
    return (value) => {
        const values = value
            .trim()
            .split(/\s+/)
            .map((val) => val);
        let props = [
            vDirValue(Axes.Top),
            dirValue(Axes.Right),
            vDirValue(Axes.Bottom),
            dirValue(Axes.Left)
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
                if (prop === Axes.Left) {
                    acc[prop] = values[1];
                }
            }
            return acc;
        }, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
        });
        return [values.length, output];
    };
}
//# sourceMappingURL=helpers.js.map