const path = require('path')

module.exports = {
  mode: "development",
  entry: "./scripts.js",
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string
  },
  devServer: {
    contentBase: path.resolve(__dirname)
  }
}