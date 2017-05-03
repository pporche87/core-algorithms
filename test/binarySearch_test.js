import { expect } from 'chai';
import binarySearch from '../src/binarySearch';

describe('binarySearch()', () => {
  it('should be a function', () => {
    expect(binarySearch).to.be.a('function');
  });

  it('Will not execute on a number higher than the maximal value in the set.', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 70)).to.equal(undefined);
  });

  it('Will not execute on a number lower thant the minimal value in the set', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], -5)).to.equal(undefined);
  });

  it('Search for a number within an array using the binary search algorithm.', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 45)).to.equal(8);
  });

  it('Search for a number within an array using the binary search algorithm.', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 20)).to.equal(3);
  });
});
