const path = require('path')

module.exports = (env, arg) => {
  return {
    entry: './src',
    output: {
      publicPath: '/',
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js'
    },
    mode: env ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/react']
          }
        },
        {
          test: /\.css/,
          loaders: ['style-loader', 'css-loader'],
          include: path.join(__dirname, '/src')
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
      contentBase: '/build'
    }
  }
}
