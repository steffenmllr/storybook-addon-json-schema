"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = void 0;
// not pretty but hey
var style = "\n.json-schema-view,\njson-schema-view {\n  font-family: monospace;\n  font-size: 0;\n  display: table-cell;\n}\n.json-schema-view > *,\njson-schema-view > * {\n  font-size: 14px;\n}\n.json-schema-view .toggle-handle,\njson-schema-view .toggle-handle {\n  cursor: pointer;\n  margin: auto .3em;\n  font-size: 10px;\n  display: inline-block;\n  transform-origin: 50% 40%;\n  transition: transform 150ms ease-in;\n}\n.json-schema-view .toggle-handle:after,\njson-schema-view .toggle-handle:after {\n  content: \"\u25BC\";\n}\n.json-schema-view .toggle-handle,\njson-schema-view .toggle-handle,\n.json-schema-view .toggle-handle:hover,\njson-schema-view .toggle-handle:hover {\n  text-decoration: none;\n  color: #333;\n}\n.json-schema-view .description,\njson-schema-view .description {\n  color: gray;\n  font-style: italic;\n}\n.json-schema-view .title,\njson-schema-view .title {\n  font-weight: bold;\n  cursor: pointer;\n}\n.json-schema-view .title,\njson-schema-view .title,\n.json-schema-view .title:hover,\njson-schema-view .title:hover {\n  text-decoration: none;\n  color: #333;\n}\n.json-schema-view .title,\njson-schema-view .title,\n.json-schema-view .brace,\njson-schema-view .brace,\n.json-schema-view .bracket,\njson-schema-view .bracket {\n  color: #333;\n}\n.json-schema-view .property,\njson-schema-view .property {\n  font-size: 0;\n  display: table-row;\n}\n.json-schema-view .property > *,\njson-schema-view .property > * {\n  font-size: 14px;\n  padding: .2em;\n}\n.json-schema-view .name,\njson-schema-view .name {\n  color: blue;\n  display: table-cell;\n  vertical-align: top;\n}\n.json-schema-view .type,\njson-schema-view .type {\n  color: green;\n}\n.json-schema-view .type-any,\njson-schema-view .type-any {\n  color: #3333ff;\n}\n.json-schema-view .required,\njson-schema-view .required {\n  color: #F00;\n}\n.json-schema-view .format,\njson-schema-view .format,\n.json-schema-view .enums,\njson-schema-view .enums,\n.json-schema-view .pattern,\njson-schema-view .pattern {\n  color: #000;\n}\n.json-schema-view .inner,\njson-schema-view .inner {\n  padding-left: 18px;\n}\n.json-schema-view.collapsed .description,\njson-schema-view.collapsed .description {\n  display: none;\n}\n.json-schema-view.collapsed .property,\njson-schema-view.collapsed .property {\n  display: none;\n}\n.json-schema-view.collapsed .closeing.brace,\njson-schema-view.collapsed .closeing.brace {\n  display: inline-block;\n}\n.json-schema-view.collapsed .toggle-handle,\njson-schema-view.collapsed .toggle-handle {\n  transform: rotate(-90deg);\n}\n.json-schema-view.json-schema-view-dark,\njson-schema-view[json-schema-view-dark] {\n  font-family: monospace;\n  font-size: 0;\n  display: table-cell;\n}\n.json-schema-view.json-schema-view-dark > *,\njson-schema-view[json-schema-view-dark] > * {\n  font-size: 14px;\n}\n.json-schema-view.json-schema-view-dark .toggle-handle,\njson-schema-view[json-schema-view-dark] .toggle-handle {\n  cursor: pointer;\n  margin: auto .3em;\n  font-size: 10px;\n  display: inline-block;\n  transform-origin: 50% 40%;\n  transition: transform 150ms ease-in;\n}\n.json-schema-view.json-schema-view-dark .toggle-handle:after,\njson-schema-view[json-schema-view-dark] .toggle-handle:after {\n  content: \"\u25BC\";\n}\n.json-schema-view.json-schema-view-dark .toggle-handle,\njson-schema-view[json-schema-view-dark] .toggle-handle,\n.json-schema-view.json-schema-view-dark .toggle-handle:hover,\njson-schema-view[json-schema-view-dark] .toggle-handle:hover {\n  text-decoration: none;\n  color: #eee;\n}\n.json-schema-view.json-schema-view-dark .description,\njson-schema-view[json-schema-view-dark] .description {\n  color: gray;\n  font-style: italic;\n}\n.json-schema-view.json-schema-view-dark .title,\njson-schema-view[json-schema-view-dark] .title {\n  font-weight: bold;\n  cursor: pointer;\n}\n.json-schema-view.json-schema-view-dark .title,\njson-schema-view[json-schema-view-dark] .title,\n.json-schema-view.json-schema-view-dark .title:hover,\njson-schema-view[json-schema-view-dark] .title:hover {\n  text-decoration: none;\n  color: #eee;\n}\n.json-schema-view.json-schema-view-dark .title,\njson-schema-view[json-schema-view-dark] .title,\n.json-schema-view.json-schema-view-dark .brace,\njson-schema-view[json-schema-view-dark] .brace,\n.json-schema-view.json-schema-view-dark .bracket,\njson-schema-view[json-schema-view-dark] .bracket {\n  color: #eee;\n}\n.json-schema-view.json-schema-view-dark .property,\njson-schema-view[json-schema-view-dark] .property {\n  font-size: 0;\n  display: table-row;\n}\n.json-schema-view.json-schema-view-dark .property > *,\njson-schema-view[json-schema-view-dark] .property > * {\n  font-size: 14px;\n  padding: .2em;\n}\n.json-schema-view.json-schema-view-dark .name,\njson-schema-view[json-schema-view-dark] .name {\n  color: lightblue;\n  display: table-cell;\n  vertical-align: top;\n}\n.json-schema-view.json-schema-view-dark .type,\njson-schema-view[json-schema-view-dark] .type {\n  color: lightgreen;\n}\n.json-schema-view.json-schema-view-dark .type-any,\njson-schema-view[json-schema-view-dark] .type-any {\n  color: #d4ebf2;\n}\n.json-schema-view.json-schema-view-dark .required,\njson-schema-view[json-schema-view-dark] .required {\n  color: #fe0000;\n}\n.json-schema-view.json-schema-view-dark .format,\njson-schema-view[json-schema-view-dark] .format,\n.json-schema-view.json-schema-view-dark .enums,\njson-schema-view[json-schema-view-dark] .enums,\n.json-schema-view.json-schema-view-dark .pattern,\njson-schema-view[json-schema-view-dark] .pattern {\n  color: #fff;\n}\n.json-schema-view.json-schema-view-dark .inner,\njson-schema-view[json-schema-view-dark] .inner {\n  padding-left: 18px;\n}\n.json-schema-view.json-schema-view-dark.collapsed .description,\njson-schema-view[json-schema-view-dark].collapsed .description {\n  display: none;\n}\n.json-schema-view.json-schema-view-dark.collapsed .property,\njson-schema-view[json-schema-view-dark].collapsed .property {\n  display: none;\n}\n.json-schema-view.json-schema-view-dark.collapsed .closeing.brace,\njson-schema-view[json-schema-view-dark].collapsed .closeing.brace {\n  display: inline-block;\n}\n.json-schema-view.json-schema-view-dark.collapsed .toggle-handle,\njson-schema-view[json-schema-view-dark].collapsed .toggle-handle {\n  transform: rotate(-90deg);\n}\n";
exports.style = style;