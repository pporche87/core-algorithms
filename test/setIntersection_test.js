import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('Return the intersection of two sets.', function(){
    const firstSet = [1, 2, 3, 4]
    const secondSet = [2, 4, 6, 8]
    expect(setIntersection(firstSet, secondSet)).to.deep.equal([2, 4])
  })

  it('Return the intersection of two sets.', function(){
    const firstSet = [3, 6, 9, 12]
    const secondSet = [6, 7, 8, 9]
    expect(setIntersection(firstSet, secondSet)).to.deep.equal([6, 9])
  })
})
