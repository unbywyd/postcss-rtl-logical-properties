import { PluginCreator } from "postcss";
/**
 * @type {import('postcss').PluginCreator}
 */
declare namespace plugin {
    type PluginOptions = {};
}
declare const plugin: PluginCreator<plugin.PluginOptions>;
export = plugin;
