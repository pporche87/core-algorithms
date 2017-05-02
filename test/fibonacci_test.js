import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should output an array', function () {
    expect(fibonacci(1)).to.be.a('array')
  })

  it('should give a proper array', function() {
    expect(fibonacci(10)).to.deep.equal([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
  })

})
