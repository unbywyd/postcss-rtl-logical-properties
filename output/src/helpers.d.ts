import { Axes, HorizontalDirection, DirectionValue, Props, VerticalDirection, MarginPadding } from "./types";
export declare function horizontalDirectionValue(relativeDir: HorizontalDirection): (axes: Axes) => DirectionValue;
export declare function horizontalDirectionAxes(relativeDir: HorizontalDirection): (axes: Axes) => Axes.Right | Axes.Left;
export declare function verticalDirectionValue(relativeDir: VerticalDirection): (axes: Axes) => DirectionValue;
export declare function verticalDirectionAxeos(relativeDir: VerticalDirection): (axes: Axes) => Axes.Top | Axes.Bottom;
export declare function inlinePropTransform(relativeDir: HorizontalDirection): (prop: Props, axes: Axes, suffix?: string) => string;
export declare function transformToDirectionValue(relativeDir: HorizontalDirection): (value: any) => any;
export declare function marginPaddingParser(relativeDir: HorizontalDirection, vRelativeDir: VerticalDirection): (value: string) => [number, MarginPadding];
