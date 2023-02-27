var expect = require('expect.js')

// expect 输入 equal 输出 
// 输入与输出必须一致，否则测试不通过
// it 代表一个测试用例
describe('单元测试', function () {
  describe('hello test', function () {
    it('hello', function () {
      expect(1).to.equal(1)
    })
  })
  it('单侧', function () {
    expect(2).to.equal(2)
  })
})