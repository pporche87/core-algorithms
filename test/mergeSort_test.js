import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('Sort an array of numbers using the merge sort algorithm.', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(mergeSort([3, 5, 7, 9, 2, 8, 6, 1, 4, 10])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

})
