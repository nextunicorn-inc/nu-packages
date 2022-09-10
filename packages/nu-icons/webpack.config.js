const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const getBabelConfig = require('./getBabelConfig');

module.exports = function ({ minimize }) {
  return {
    mode: 'production',
    bail: true,
    devtool: 'source-map',
    entry: {
      index: ['./src/index.ts'],
    },
    output: {
      filename: minimize ? 'icons.min.js' : 'icons.js',
      path: path.join(__dirname, 'dist/umd'),
      library: 'NextunicornIcons',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: getBabelConfig({ isESM: true }),
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                happyPackMode: false,
                appendTsSuffixTo: [],
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: !!minimize,
      minimizer: [new TerserPlugin()],
    },
    performance: { maxEntrypointSize: 10485760, maxAssetSize: 5242880 },
    plugins: [
      new DefinePlugin({
        'process.env': { NODE_ENV: '"production"' },
      }),
      new CaseSensitivePathsPlugin(),
      new webpack.ids.HashedModuleIdsPlugin(),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  };
};
