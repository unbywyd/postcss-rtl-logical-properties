import { PluginCreator } from 'postcss';
import { Props, PluginMethods } from './types.cjs';

declare const plugName = "postcss-rtl-logical-properties";
/**
 * @type {import('postcss').PluginCreator}
 */
declare namespace plugin {
    type PluginOptions = {};
    type ignoreDeclarationList = Array<Props>;
}
declare const plugin: PluginCreator<plugin.PluginOptions> & PluginMethods;

export { plugin as default, plugName };
