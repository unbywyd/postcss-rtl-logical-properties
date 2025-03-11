import { HorizontalDirection, Axes, DirectionValue, Props, VerticalDirection, MarginPadding } from './types.cjs';

declare function horizontalDirectionValue(relativeDir: HorizontalDirection): (axes: Axes) => DirectionValue;
declare function getIgnoreDeclarationList(): Props[];
declare function horizontalDirectionAxes(relativeDir: HorizontalDirection): (axes: Axes) => Axes.Right | Axes.Left;
declare function verticalDirectionValue(relativeDir: VerticalDirection): (axes: Axes) => DirectionValue;
declare function verticalDirectionAxeos(relativeDir: VerticalDirection): (axes: Axes) => Axes.Top | Axes.Bottom;
declare function inlinePropTransform(relativeDir: HorizontalDirection): (prop: Props, axes: Axes, suffix?: string) => string;
declare function transformToDirectionValue(relativeDir: HorizontalDirection): (value: any) => any;
declare function marginPaddingParser(relativeDir: HorizontalDirection, vRelativeDir: VerticalDirection): (value: string) => [number, MarginPadding];

export { getIgnoreDeclarationList, horizontalDirectionAxes, horizontalDirectionValue, inlinePropTransform, marginPaddingParser, transformToDirectionValue, verticalDirectionAxeos, verticalDirectionValue };
