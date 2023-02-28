// node 体系
// commonjs

var common = require('./rollup.js');
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs', // 输出模块 遵循 commonjs 标准规范
    banner: common.banner
  },
  plugins: [common.getCompiler()]
}