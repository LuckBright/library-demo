var expect = require('expect.js')
var clone = require('../src/index.js').clone

// expect 输入 equal 输出 
// 输入与输出必须一致，否则测试不通过
// it 代表一个测试用例

// 对于函数的测试，可以按照参数分组，每个参数一组，在对一个参数进行测试时，保证其他参数无影响。


// clone 函数的测试

describe('function clone', function () {
  it('正确的测试用例', function () {
    // 克隆数组
    var ary = [1, [2, 3]]
    var cloneAry = clone(ary)
    // 克隆的数组是否不全等于原有的数组
    expect(cloneAry).not.to.equal(ary)
    // 克隆的数组是否 == 于 原来的数组
    expect(cloneAry).to.eql(ary)

    // 对象
    var obj = { a: 1, b: { c: 2 } }
    var cloneObj = clone(obj)

    // 克隆的对象是否不全等于原有的对象
    expect(cloneObj).not.to.equal(obj)
    // 克隆的对象是否 == 于 原来的对象
    expect(cloneObj).to.eql(obj)

    // 简单类型
    var num = 222
    var str = '111'
    expect(clone(num)).to.equal(222)
    expect(clone(str)).to.equal('111')
  })
  it('边界值测试用例', function () {
    // 空参数
    expect(clone()).to.equal()

    // undefined
    expect(clone(undefined)).to.equal(undefined)

    // null
    expect(clone(null)).to.equal(null)
  })
})