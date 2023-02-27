// 当字符串 str 的长度小于 count 时，在字符串左侧填充指定字符
function leftpad (str, count, pad) {
  if (!pad) return new Error('请传入需要填充的指定字符')
  if (typeof str !== 'string') return new Error('请传入字符串')

  if (str.length < count) {
    return `${[...Array(count)].map(v => pad).join('')}${str}`.slice(-count)
  }
  return str
}
module.exports = leftpad

