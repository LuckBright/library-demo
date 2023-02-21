const path = require('path')

module.exports = {
  entry: './index.js', // 打包输入文件
  output: {
    filename: 'index.js', // 打包后输出文件名
    path: path.resolve(__dirname, 'dist'), // 打包到根目录，并且创建 dist 文件夹
  },
  resolve: {
    /**
     * 当从 npm 包中导入模块时（例如，import * as D3 from 'd3'），
     * 此选项将决定在 package.json 中使用哪个字段导入模块。根据 webpack 配置中指定的 target 不同，默认值也会有所不同。
     */
    mainFields: ['module','main']
  }
}