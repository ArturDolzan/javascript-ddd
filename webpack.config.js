const path = require('path');

module.exports = {
  entry: './src/main.js', // Ponto de entrada da sua aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  target: 'node', // Otimiza a build para Node.js
  module: {
    rules: [
      {
        test: /\.m?js$/, // Processa arquivos .js e .mjs
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: 'babel-loader', // Usa babel-loader para transpilar os arquivos
          options: {
            presets: ['@babel/preset-env'], // Usa o preset-env do Babel
          },
        },
      },
    ],
  },
};
