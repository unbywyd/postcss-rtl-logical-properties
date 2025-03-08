import type { PluginCreator } from "postcss";
import { PluginMethods, Props } from "./types.js";
export declare const plugName = "postcss-rtl-logical-properties";
/**
 * @type {import('postcss').PluginCreator}
 */
declare namespace plugin {
    type PluginOptions = {};
    type ignoreDeclarationList = Array<Props>;
}
declare const plugin: PluginCreator<plugin.PluginOptions> & PluginMethods;
export default plugin;
//# sourceMappingURL=plugin.d.ts.map