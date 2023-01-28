import { PluginCreator } from "postcss";
import { PluginMethods, Props } from "./types";
/**
 * @type {import('postcss').PluginCreator}
 */
declare namespace plugin {
    type PluginOptions = {};
    type ignoreDeclarationList = Array<Props>;
}
declare const plugin: PluginCreator<plugin.PluginOptions> & PluginMethods;
export = plugin;
