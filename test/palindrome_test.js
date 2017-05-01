import { expect } from 'chai'
import palindrome from '../src/palindrome'

describe('palindrome()', function(){

  it('should be a function', function(){
    expect(palindrome).to.be.a('function')
  })

  it('Determine if a string is a palindrome. Return true or false.Ignore punctuation, spacing, and case sensitivity.)', function(){
    expect(palindrome('radar')).to.equal(true)
    expect(palindrome('bananas')).to.equal(false)
    expect(palindrome('A man, a plan, a canal: Panama')).to.equal(true)
  })
})
