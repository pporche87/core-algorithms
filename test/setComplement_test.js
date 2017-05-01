import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('Return the symmetric difference of two sets.', function(){
    const firstSet = [1, 2, 3, 4]
    const secondSet = [2, 4, 6, 8]
    expect(setComplement(firstSet, secondSet)).to.deep.equal([6, 8])
  })

  it('Return the symmetric difference of two sets.', function(){
    const firstSet = [3, 6, 9, 12]
    const secondSet = [6, 7, 8, 9]
    expect(setComplement(firstSet, secondSet)).to.deep.equal([7, 8])
  })
})
