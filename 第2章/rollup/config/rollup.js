// 导出统一的配置信息

var pkg = require('../package.json')

var version = pkg.version

var banner = `/*! 
  * ${pkg.name} v${version}
  * Licensed under MIT
*/`

exports.banner = banner
