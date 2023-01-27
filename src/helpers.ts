import {
  Axes,
  HorizontalDirection,
  DirectionType,
  DirectionValue,
  Props,
  VerticalDirection,
  MarginPadding,
} from "./types";

export function horizontalDirectionValue(relativeDir: HorizontalDirection) {
  return (axes: Axes) => {
    if (
      (axes == Axes.Right && relativeDir == HorizontalDirection.LeftToRight) ||
      (axes == Axes.Left && relativeDir == HorizontalDirection.RightToLeft)
    ) {
      return DirectionValue.End;
    }
    return DirectionValue.Start;
  };
}

export function horizontalDirectionAxes(relativeDir: HorizontalDirection) {
  return (axes: Axes) => {
    if (
      (axes == Axes.Right && relativeDir == HorizontalDirection.LeftToRight) ||
      (axes == Axes.Left && relativeDir == HorizontalDirection.RightToLeft)
    ) {
      return Axes.Right;
    }
    return Axes.Left;
  };
}

export function verticalDirectionValue(relativeDir: VerticalDirection) {
  return (axes: Axes) => {
    if (
      (axes == Axes.Top && relativeDir == VerticalDirection.TopToBottom) ||
      (axes == Axes.Bottom && relativeDir == VerticalDirection.ButtomToTop)
    ) {
      return DirectionValue.Start;
    }
    return DirectionValue.End;
  };
}

export function verticalDirectionAxeos(relativeDir: VerticalDirection) {
  return (axes: Axes) => {
    if (
      (axes == Axes.Top && relativeDir == VerticalDirection.TopToBottom) ||
      (axes == Axes.Bottom && relativeDir == VerticalDirection.ButtomToTop)
    ) {
      return Axes.Top;
    }
    return Axes.Bottom;
  };
}

export function inlinePropTransform(relativeDir: HorizontalDirection) {
  const dirValue = horizontalDirectionValue(relativeDir);
  return (prop: Props, axes: Axes, suffix: string = "") => {
    return `${prop}-${DirectionType.Inline}-${dirValue(axes)}${suffix}`;
  };
}

export function transformToDirectionValue(relativeDir: HorizontalDirection) {
  const dirValue = horizontalDirectionValue(relativeDir);
  return (value: any) => {
    value = value.trim();
    if (value === Axes.Left || value === Axes.Right) {
      value = `${dirValue(value)}`;
    }
    return value;
  };
}

export function marginPaddingParser(
  relativeDir: HorizontalDirection,
  vRelativeDir: VerticalDirection
) {
  const dirValue = horizontalDirectionAxes(relativeDir);
  const vDirValue = verticalDirectionAxeos(vRelativeDir);

  return (value: string): [number, MarginPadding] => {
    const values = value
      .trim()
      .split(/\s+/)
      .map((val) => val);

    let props = [
      vDirValue(Axes.Top),
      dirValue(Axes.Left),
      vDirValue(Axes.Bottom),
      dirValue(Axes.Right),
    ];
    let i = 0;
    const output: MarginPadding = props.reduce(
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
        }
        return acc;
      },
      {
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
      }
    );
    return [values.length, output];
  };
}
