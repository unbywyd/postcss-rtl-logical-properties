import postcss from 'postcss';
import plugin from '../output/index.js';
import postcssRTL from 'postcss-rtl';

const css = `
.foo {
    margin-left: 10px;
    margin-right: 20px;
    border-radius: 5px 10px 15px 20px;
    }
`;

postcss([plugin, postcssRTL({
    blacklist: plugin.ignoreDeclarationList
})])
    .process(css, { from: false })
    .then(result => {
        console.log(result.css);
    });