# webpack-notes

---
### Basic
- Install webpack via npm or yarn
- Set up folder tree:
- dist
    - index.html
    
- src
    - index.js
    
- Run ``npx webpack`` or ``.node_module/.bin/webpack`` 
- a new file **main.js** is added inside dist folder.
---
## Options

- Modify name file main js, name file source input, and so on...
- Adding a file ``webpack.config.js`` into app folder
```
./webpack.config.js

const path = require('path');

module.exports = {
    entry: './src/index.js', // Source js file to webpack bunch
    output: {
        filename: "newMain.js", // Name default is main.js
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development", // development | production
    watch: false // option
}
```

