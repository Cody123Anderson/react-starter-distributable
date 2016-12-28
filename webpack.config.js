var webpack = require('webpack');
var values = require('postcss-modules-values');
var env = process.env.NODE_ENV || 'development';
var minify = env === 'production';

var config = {
  context: __dirname,
  devtool: minify ? 'cheap-module-source-map' : 'eval',
  entry: './src/components/level1/index.js',
  output: {
    path: __dirname + '/dist',
    filename: minify ? 'index.js' : 'index-dev.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: ['bindings'],
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=ps_[name]_[local]--[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: minify ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ] : [],
  postcss: [
    values
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
};

module.exports = config;
