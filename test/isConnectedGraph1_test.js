import { expect } from 'chai';
import isConnectedGraph from '../src/isConnectedGraph1';

describe('isConnectedGraph()', () => {
  it('should be a function', () => {
    expect(isConnectedGraph).to.be.a('function');
  });

  it('should say when valid imputs are connected or not', () => {
    const graphA = {
      a: ['b', 'c'],
      b: ['a', 'd'],
      c: ['a', 'd'],
      d: ['b', 'c'],
    };
    const graphB = {
      a: ['b'],
      b: ['a'],
      c: ['d'],
      d: ['c'],
    };
    expect(isConnectedGraph(graphA)).to.equal(true);
    expect(isConnectedGraph(graphB)).to.equal(false);
  });
});
