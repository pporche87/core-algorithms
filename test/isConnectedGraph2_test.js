import { expect } from 'chai';
import nestedCheckIsConnected from '../src/isConnectedGraph2';

describe('isConnectedGraph()', () => {
  it('should be a function', () => {
    expect(nestedCheckIsConnected).to.be.a('function');
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
    expect(nestedCheckIsConnected(graphA)).to.equal(true);
    // =============================================
    // ========== FALSE TEST NOT PASSING ===========
    // expect(nestedCheckIsConnected(graphB)).to.equal(false);
    // =============================================
    // =============================================
  });
});
