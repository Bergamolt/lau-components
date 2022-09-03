const path = require('path')

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
      {
        test: /\.module\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
              attributes: {
                'data-style': 'lau-ui-classes',
              },
              insert: function insertAtTop(element) {
                var parent = document.querySelector('head')
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement = globalThis._lastElementInsertedByStyleLoader

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild)
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling)
                } else {
                  parent.appendChild(element)
                }

                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element
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
