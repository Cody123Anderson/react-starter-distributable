const webpack = require('webpack');
const path = require('path');

let filename = 'bundle.js';
let devtool = 'source-map';
let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.NPM_PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version)
  })
];

if (process.env.NODE_ENV === 'development') {
  filename = 'bundle-dev.js';
  devtool = 'eval-source-map';
}

const config = {
  entry: './src/components/root/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename,
    library: 'shared-components',
    libraryTarget: 'umd'
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src')]
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|jpg|png|woff)$/,
        use: 'url-loader'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    lodash: {
      root: '_',
      commonjs2: 'lodash',
      commonjs: 'lodash',
      amd: 'lodash'
    }
  },
  plugins: plugins
};

module.exports = config;
