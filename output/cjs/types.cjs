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
var types_exports = {};
__export(types_exports, {
  Axes: () => Axes,
  DirectionType: () => DirectionType,
  DirectionValue: () => DirectionValue,
  HorizontalDirection: () => HorizontalDirection,
  Props: () => Props,
  VerticalDirection: () => VerticalDirection
});
module.exports = __toCommonJS(types_exports);
var DirectionType = /* @__PURE__ */ ((DirectionType2) => {
  DirectionType2["Block"] = "block";
  DirectionType2["Inline"] = "inline";
  return DirectionType2;
})(DirectionType || {});
var DirectionValue = /* @__PURE__ */ ((DirectionValue2) => {
  DirectionValue2["Start"] = "start";
  DirectionValue2["End"] = "end";
  return DirectionValue2;
})(DirectionValue || {});
var HorizontalDirection = /* @__PURE__ */ ((HorizontalDirection2) => {
  HorizontalDirection2["RightToLeft"] = "right-to-left";
  HorizontalDirection2["LeftToRight"] = "left-to-right";
  return HorizontalDirection2;
})(HorizontalDirection || {});
var VerticalDirection = /* @__PURE__ */ ((VerticalDirection2) => {
  VerticalDirection2["TopToBottom"] = "top-to-bottom";
  VerticalDirection2["ButtomToTop"] = "bottom-to-top";
  return VerticalDirection2;
})(VerticalDirection || {});
var Axes = /* @__PURE__ */ ((Axes2) => {
  Axes2["Top"] = "top";
  Axes2["Right"] = "right";
  Axes2["Bottom"] = "bottom";
  Axes2["Left"] = "left";
  return Axes2;
})(Axes || {});
var Props = /* @__PURE__ */ ((Props2) => {
  Props2["Padding"] = "padding";
  Props2["PaddingLeft"] = "padding-left";
  Props2["PaddingRight"] = "padding-right";
  Props2["Margin"] = "margin";
  Props2["MarginLeft"] = "margin-left";
  Props2["MarginRight"] = "margin-right";
  Props2["BorderRight"] = "border-right";
  Props2["BorderLeft"] = "border-left";
  Props2["BorderLeftWidth"] = "border-left-width";
  Props2["BorderLeftColor"] = "border-left-color";
  Props2["BorderRightWidth"] = "border-right-width";
  Props2["BorderRightColor"] = "border-right-color";
  Props2["BorderLeftStyle"] = "border-left-style";
  Props2["BorderRadius"] = "border-radius";
  Props2["BorderRightStyle"] = "border-right-style";
  Props2["BorderBottomLeftRadius"] = "border-bottom-left-radius";
  Props2["BorderBottomRightRadius"] = "border-bottom-right-radius";
  Props2["BorderTopLeftRadius"] = "border-top-left-radius";
  Props2["BorderTopRightRadius"] = "border-top-right-radius";
  Props2["Left"] = "left";
  Props2["Right"] = "right";
  Props2["Float"] = "float";
  Props2["Clear"] = "clear";
  Props2["TextAlign"] = "text-align";
  Props2["Border"] = "border";
  Props2["Top"] = "top";
  Props2["Bottom"] = "bottom";
  return Props2;
})(Props || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Axes,
  DirectionType,
  DirectionValue,
  HorizontalDirection,
  Props,
  VerticalDirection
});
