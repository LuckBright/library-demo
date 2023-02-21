// node 体系 无法在浏览器中运行
// 查看 本文件结果 可以在 命令行使用 node index.js 查看
import { type } from './type'

export function clone(source) {
  const t = type(source);
  if (t !== 'object' && t !== 'array') {
      return source;
  }

  let target ;

  if (t === 'object') {
      target = {};
      for(let i in source) {
        if (source.hasOwnProperty(i)) {
          target[i] = clone(source[i]); // 注意这里
        }
      }
  } else {
    target = [];
    for(let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]); // 注意这里
    }
  }

  return target;
}
console.log('-1----')
let a = { c: 1 }
let b = clone(a); // 深拷贝

b.c = 333
console.log(a, b);