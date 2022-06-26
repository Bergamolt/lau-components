const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ISO = require('iso-morphic-style-loader')

const devMode = process.env.NODE_DEV !== 'production'

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         esModule: true,
      //         modules: {
      //           namedExport: true,
      //           localIdentName: 'foo__[name]__[local]',
      //         },
      //       },
      //     },
      //   ],
      // },

      {
        test: /\.(css|s[sc]ss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
        include: /\.module\.(css|s[ac]ss)$/,
      },

      // {
      //   test: /\.(css|scss)$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      //   exclude: /\.module\.(css|s[ac]ss)$/,
      // },

      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.(css|s[ac]ss)$/,
      },

      // {
      //   test: /\.(css|scss)$/,
      //   use: [
      //     'style-loader',
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //     },
      //   ],
      // },

      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}
