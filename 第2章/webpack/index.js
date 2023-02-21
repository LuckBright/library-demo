// node 体系 无法在浏览器中运行
// 查看 本文件结果 可以在 命令行使用 node index.js 查看

console.log('-0----')

const clone = require('./clone/index')
console.log('-1----')
let a = { c: 1 }
let b = clone(a); // 深拷贝

b.c = 333
console.log(a, b);