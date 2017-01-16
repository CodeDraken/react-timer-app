var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'materialize-css/dist/js/materialize.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Navigation: 'app/components/Navigation.jsx',
      Footer: 'app/components/Footer.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 versions']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 versions', 'sass']
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "ignore-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "ignore-loader"
      }
    ]
  },
  devtool: 'eval-source-map'
};