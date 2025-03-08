const plugin = require("./plugin.js");

module.exports = plugin;
module.exports.postcss = true;
module.exports.ignoreDeclarationList = plugin.ignoreDeclarationList;
