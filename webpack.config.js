//импорт модулей и присваивание их в переменные
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//модуль path, учитывает различия путей в разных операционных системах.
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //для извлечения css файла отдельно

//ниже запись означает, что все настройки этого файла помещаются в объект, который экспортируется как модуль по умолчанию.
module.exports = {
  //укажем точку входа и выхода файла js
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },

  // //настройки для сборки scss файлов
  // module: {
  //   rules: [
  //     {
  //       test: /\.(scss|css)$/,
  //       use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  //     },

  //     //что бы вебпак не пересохранял картинки и тд
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //           options: {
  //             esModule: false,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // plugins: [
  //   //создали два экземпляра со свойствами для создания копий html файлов в папке dist(две страницы)
  //   // new HtmlWebpackPlugin({
  //   //   template: './src/index.html',
  //   //   filename: 'index.html',
  //   // }),
  //   // new HtmlWebpackPlugin({
  //   //   template: './src/pets.html',
  //   //   filename: 'pets.html',
  //   // }),

  //   //экземпляр который компилирует стили в один файл в папку css
  //   // new MiniCssExtractPlugin({
  //   //   filename: 'style.css',
  //   // }),
  // ],
};
