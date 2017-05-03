import { expect } from 'chai';
import bubbleSort from '../src/bubbleSort';

describe('bubbleSort()', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });

  it('Search for a number within an array using the binary search algorithm.', () => {
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4,
      9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 5, 4,
      9])).to.deep.equal([2, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
    expect(bubbleSort([10.1, 2.2, 7.7, 5.5, 8.8, 3.3, 6.6, 1.1, 4.4,
      9.9])).to.deep.equal([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1]);
  });
  it('Handles unsortable things without a nervous breakdown', () => {
    expect(bubbleSort([])).to.deep.equal([]);
    expect(bubbleSort('smoked cheese')).to.deep.equal(undefined);
    expect(bubbleSort({})).to.deep.equal(undefined);
  });
});
