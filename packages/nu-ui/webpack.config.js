const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const getBabelConfig = require('./getBabelConfig');

const rootPath = path.join(__dirname, '../..');
module.exports = function ({ minimize }) {
  return {
    mode: 'production',
    bail: true,
    devtool: 'source-map',
    entry: {
      index: ['./index.ts'],
    },
    output: {
      filename: minimize ? 'ui.min.js' : 'ui.js',
      path: path.join(__dirname, 'dist/umd'),
      library: 'NextuniconUI',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.join(rootPath, 'packages/nu-icons'),
            path.join(rootPath, 'packages/nu-types'),
          ],
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
        'process.env': { NODE_ENV: '"production"', PUBLIC_URL: undefined },
      }),
      new CaseSensitivePathsPlugin(),
      new webpack.ids.HashedModuleIdsPlugin({
        context: __dirname,
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20,
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@nextunicorn/types': path.resolve(__dirname, '../nu-types'),
        '@nextunicorn/icons': path.resolve(__dirname, '../nu-icons'),
      },
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  };
};
