// 浏览器体系
// UMD

var nodeResolve = require('rollup-plugin-node-resolve');
var common = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js', // 是 all in one 的缩写，表示将全部模块规范和依赖都集中到一起
    format: 'umd', // 输出模块 遵循 umd 标准规范
    name: 'clone',
    banner: common.banner
  },
  plugins: [
    nodeResolve({
      main: true,
      // https://github.com/rollup/rollup-plugin-node-resolve
      extensions: ['.js'] // 接收一个数组
    }),
    common.getCompiler()
  ]
}