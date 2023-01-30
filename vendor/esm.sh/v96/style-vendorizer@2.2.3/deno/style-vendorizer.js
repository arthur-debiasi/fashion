/* esm.sh - esbuild bundle(style-vendorizer@2.2.3) deno production */
var t = new Map([
  ["align-self", "-ms-grid-row-align"],
  ["color-adjust", "-webkit-print-color-adjust"],
  ["column-gap", "grid-column-gap"],
  ["forced-color-adjust", "-ms-high-contrast-adjust"],
  ["gap", "grid-gap"],
  ["grid-template-columns", "-ms-grid-columns"],
  ["grid-template-rows", "-ms-grid-rows"],
  ["justify-self", "-ms-grid-column-align"],
  ["margin-inline-end", "-webkit-margin-end"],
  ["margin-inline-start", "-webkit-margin-start"],
  ["mask-border", "-webkit-mask-box-image"],
  ["mask-border-outset", "-webkit-mask-box-image-outset"],
  ["mask-border-slice", "-webkit-mask-box-image-slice"],
  ["mask-border-source", "-webkit-mask-box-image-source"],
  ["mask-border-repeat", "-webkit-mask-box-image-repeat"],
  ["mask-border-width", "-webkit-mask-box-image-width"],
  ["overflow-wrap", "word-wrap"],
  ["padding-inline-end", "-webkit-padding-end"],
  ["padding-inline-start", "-webkit-padding-start"],
  ["print-color-adjust", "color-adjust"],
  ["row-gap", "grid-row-gap"],
  ["scroll-margin-bottom", "scroll-snap-margin-bottom"],
  ["scroll-margin-left", "scroll-snap-margin-left"],
  ["scroll-margin-right", "scroll-snap-margin-right"],
  ["scroll-margin-top", "scroll-snap-margin-top"],
  ["scroll-margin", "scroll-snap-margin"],
  ["text-combine-upright", "-ms-text-combine-horizontal"],
]);
function e(r) {
  return t.get(r);
}
function s(r) {
  var i =
    /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i
      .exec(r);
  return i ? i[1] ? 1 : i[2] ? 2 : i[3] ? 3 : 5 : 0;
}
function o(r, i) {
  var a =
    /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i
      .exec(r);
  return a
    ? a[1]
      ? /^sti/i.test(i) ? 1 : 0
      : a[2]
      ? /^pat/i.test(i) ? 1 : 0
      : a[3]
      ? /^image-/i.test(i) ? 1 : 0
      : a[4]
      ? i[3] === "-" ? 2 : 0
      : /^(?:inline-)?grid$/i.test(i)
      ? 4
      : 0
    : 0;
}
export {
  e as cssPropertyAlias,
  o as cssValuePrefixFlags,
  s as cssPropertyPrefixFlags,
};
