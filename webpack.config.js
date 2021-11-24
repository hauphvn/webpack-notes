const path = require('path');

module.exports = {
    entry: './src/index.js', // Source js file to webpack bunch
    output: {
        filename: "newMain.js", // Name default is main.js
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    watch: false
}
