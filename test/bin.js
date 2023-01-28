const postcss = require('postcss');
const chokidar = require('chokidar');

const plugin = require('../output/src/index.js');



const postcssRTL = require('postcss-rtl');

// One-liner for current directory
chokidar.watch(['../output/src/index.js']).on('all', (event, path) => {
   const css = `
       .test {
         margin: 0 auto;
       }
    `

   postcss([plugin, postcssRTL({
      blacklist: plugin.ignoreDeclarationList
   })])
      .process(css, { from: false })
      .then(result => {
         console.log(result.css)
      })
});