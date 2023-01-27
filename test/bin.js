const postcss = require('postcss');
const chokidar = require('chokidar');
const fs = require('fs');
const { plugin } = require('../output/src/index.js');

// One-liner for current directory
chokidar.watch(['../output/src/index.js']).on('all', (event, path) => {
    const css = `
       .test {
            margin: 3px 10px 3px 2px;
            padding-left: 10px;
            left: 20px;
            border-left-color: #FFF;
            border-right: 1px solid #000;
            border-bottom-left-radius: 20px;
            float: left;
            text-align: right;
       }
    `
    postcss([plugin])
        .process(css, { from: false })
        .then(result => {
           console.log(result.css)
        })
});