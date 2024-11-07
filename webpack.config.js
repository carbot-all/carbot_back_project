// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',  // 엔트리 파일 경로 설정
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',  // 프로덕션 모드 설정 (또는 'development'로 설정 가능)
  module: {
    rules: [
      {
        test: /\.js$/,  // JavaScript 파일을 위한 로더 설정
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Babel 로더 사용
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
