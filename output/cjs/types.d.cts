declare enum DirectionType {
    Block = "block",
    Inline = "inline"
}
declare enum DirectionValue {
    Start = "start",
    End = "end"
}
type IgnoreDeclaration = any;
interface PluginMethods {
    ignoreDeclarationList: Array<Props>;
}
declare enum HorizontalDirection {
    RightToLeft = "right-to-left",
    LeftToRight = "left-to-right"
}
declare enum VerticalDirection {
    TopToBottom = "top-to-bottom",
    ButtomToTop = "bottom-to-top"
}
declare enum Axes {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left"
}
declare enum Props {
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
    BorderRadius = "border-radius",
    BorderRightStyle = "border-right-style",
    BorderBottomLeftRadius = "border-bottom-left-radius",
    BorderBottomRightRadius = "border-bottom-right-radius",
    BorderTopLeftRadius = "border-top-left-radius",
    BorderTopRightRadius = "border-top-right-radius",
    Left = "left",
    Right = "right",
    Float = "float",
    Clear = "clear",
    TextAlign = "text-align",
    Border = "border",
    Top = "top",
    Bottom = "bottom"
}
type MarginPadding = {
    [key in Axes]: string;
};
interface PluginOptions {
    hDirection?: HorizontalDirection;
    vDirection?: VerticalDirection;
}

export { Axes, DirectionType, DirectionValue, HorizontalDirection, type IgnoreDeclaration, type MarginPadding, type PluginMethods, type PluginOptions, Props, VerticalDirection };
