import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should output an array', function () {
    expect(fibonacci(1)).to.be.a('array')
  })

  
})
