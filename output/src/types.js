"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Props = exports.Axes = exports.VerticalDirection = exports.HorizontalDirection = exports.DirectionValue = exports.DirectionType = void 0;
var DirectionType;
(function (DirectionType) {
    DirectionType["Block"] = "block";
    DirectionType["Inline"] = "inline";
})(DirectionType = exports.DirectionType || (exports.DirectionType = {}));
var DirectionValue;
(function (DirectionValue) {
    DirectionValue["Start"] = "start";
    DirectionValue["End"] = "end";
})(DirectionValue = exports.DirectionValue || (exports.DirectionValue = {}));
var HorizontalDirection;
(function (HorizontalDirection) {
    HorizontalDirection["RightToLeft"] = "right-to-left";
    HorizontalDirection["LeftToRight"] = "left-to-right";
})(HorizontalDirection = exports.HorizontalDirection || (exports.HorizontalDirection = {}));
var VerticalDirection;
(function (VerticalDirection) {
    VerticalDirection["TopToBottom"] = "top-to-bottom";
    VerticalDirection["ButtomToTop"] = "bottom-to-top";
})(VerticalDirection = exports.VerticalDirection || (exports.VerticalDirection = {}));
var Axes;
(function (Axes) {
    Axes["Top"] = "top";
    Axes["Right"] = "right";
    Axes["Bottom"] = "bottom";
    Axes["Left"] = "left";
})(Axes = exports.Axes || (exports.Axes = {}));
var Props;
(function (Props) {
    Props["Padding"] = "padding";
    Props["PaddingLeft"] = "padding-left";
    Props["PaddingRight"] = "padding-right";
    Props["Margin"] = "margin";
    Props["MarginLeft"] = "margin-left";
    Props["MarginRight"] = "margin-right";
    Props["BorderRight"] = "border-right";
    Props["BorderLeft"] = "border-left";
    Props["BorderLeftWidth"] = "border-left-width";
    Props["BorderLeftColor"] = "border-left-color";
    Props["BorderRightWidth"] = "border-right-width";
    Props["BorderRightColor"] = "border-right-color";
    Props["BorderLeftStyle"] = "border-left-style";
    Props["BorderRightStyle"] = "border-right-style";
    Props["BorderBottomLeftRadius"] = "border-bottom-left-radius";
    Props["BorderBottomRightRadius"] = "border-bottom-right-radius";
    Props["BorderTopLeftRadius"] = "border-top-left-radius";
    Props["BorderTopRightRadius"] = "border-top-right-radius";
    Props["Left"] = "left";
    Props["Right"] = "right";
    Props["Float"] = "float";
    Props["Clear"] = "clear";
    Props["TextAlight"] = "text-align";
    Props["Border"] = "border";
})(Props = exports.Props || (exports.Props = {}));
//# sourceMappingURL=types.js.map