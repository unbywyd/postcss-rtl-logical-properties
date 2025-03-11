import { Props } from './types.cjs';
import plugin from './plugin.cjs';
import 'postcss';

declare const ignoreDeclarationList: Props[];

declare const postcss = true;

export { plugin as default, ignoreDeclarationList, postcss };
