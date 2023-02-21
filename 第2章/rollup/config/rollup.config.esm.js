// webpack 体系
// ES Module
// node 体系
// commonjs
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es' // 输出模块 遵循 ES Module 标准规范
  }
}