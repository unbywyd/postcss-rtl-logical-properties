const postcss = require('postcss');
const chokidar = require('chokidar');

const plugin = require('../output/src/index.js');



const postcssRTL = require('postcss-rtl');

// One-liner for current directory
chokidar.watch(['../output/src/index.js']).on('all', (event, path) => {
    const css = `
       .test {
         padding-left: 10px;
        border-right: 20px;
        margin: 10px 1px 10px 29px;
        transform: translateX(50%)
       }
    `
    
    postcss([postcssRTL({
      blacklist: plugin.ignoreDeclarationList
    }), plugin])
        .process(css, { from: false })
        .then(result => {
           console.log(result.css)
        })
});