import path from 'path';

const __dirname = path.resolve();

export default {
  debug: true,
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader','css-loader']}
    ]
  }
}
