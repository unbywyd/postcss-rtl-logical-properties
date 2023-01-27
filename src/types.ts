export enum DirectionType {
  Block = "block",
  Inline = "inline",
}
export enum DirectionValue {
  Start = "start",
  End = "end",
}
export enum HorizontalDirection {
  RightToLeft = "right-to-left",
  LeftToRight = "left-to-right",
}
export enum VerticalDirection {
  TopToBottom = "top-to-bottom",
  ButtomToTop = "bottom-to-top",
}
export enum Axes {
  Top = "top",
  Right = "right",
  Bottom = "bottom",
  Left = "left",
}
export enum Props {
  Padding = "padding",
  PaddingLeft = "padding-left",
  PaddingRight = "padding-right",
  Margin = "margin",
  MarginLeft = "margin-left",
  MarginRight = "margin-right",
  BorderRight = "border-right",
  BorderLeft = "border-left",
  BorderLeftWidth = "border-left-width",
  BorderLeftColor = "border-left-color",
  BorderRightWidth = "border-right-width",
  BorderRightColor = "border-right-color",
  BorderLeftStyle = "border-left-style",
  BorderRightStyle = "border-right-style",
  BorderBottomLeftRadius = "border-bottom-left-radius",
  BorderBottomRightRadius = "border-bottom-right-radius",
  BorderTopLeftRadius = "border-top-left-radius",
  BorderTopRightRadius = "border-top-right-radius",
  Left = "left",
  Right = "right",
  Float = "float",
  Clear = "clear",
  TextAlight = "text-align",
  Border = "border",
}

export type MarginPadding = {
  [key in Axes]: string;
};

export interface PluginOptions {
  hDirection?: HorizontalDirection;
  vDirection?: VerticalDirection;
}
