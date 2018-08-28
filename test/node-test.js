import { expect } from 'chai';
import Node from '../lib/Node'
    
describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('p');
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should take letter as argument and assign it to first letter', () => {
    expect(node.letter).to.equal('p');
  })

  it('should default end to equal false', () => {
    expect(node.end).to.equal('false');
  })

  it('should default children to an empty object', () => {
    expect(node.children).to.deep.equal({})
  })
})