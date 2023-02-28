// 导出统一的配置信息

var pkg = require('../package.json')
var babel = require('rollup-plugin-babel')

var version = pkg.version

var banner = `/*! 
  * ${pkg.name} v${version}
  * Licensed under MIT
*/`



/**
 * 
 * @returns 兼容 ES 5,并且 将 es6 的代码转换为 es5
 */
function getCompiler () {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: 
              'last 2 versions, > 1%, ie >= 8, chrome >= 45, safari >= 10',
              node: '0.12'
          },
          modules: false,
          loose: false // 松散模式 更好的兼容 IE8 浏览器
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 2, // es6 代码转换为 es5，更好的兼容 低版本浏览器
          'helpers': false,
          'regenerator': false
        }
      ]
    ],
    runtimeHelpers: true,
    exclude: 'node_modules/**'
  })
}

exports.name = 'clone'
exports.banner = banner
exports.getCompiler = getCompiler
