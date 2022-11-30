const path = require('path');

module.exports = {
  // The entry point file described above
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  entry: {
    main: './src/js/index.js',
    api: './src/js/api.js',
    chat: './src/js/modules/chatScript.js'
  },
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'public'),
    // filename: 'bundle.js'
    filename: '[name].bundle.js',
    clean: {
      keep: filename => {
        console.log("debug", filename)
        
        return ['index.html', 'main.css'].includes(filename)
      }
    }
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
};