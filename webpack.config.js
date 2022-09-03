const path = require('path')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const isDev = process.env.NODE_ENV === 'development'

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
  // plugins: isDev ? [] : [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.module\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              attributes: {
                'data-style': 'lau-css',
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: 'Lau[folder]_[local]',
              },
              esModule: false,
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.(css|s[ac]ss)$/,
      },

      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}
