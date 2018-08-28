import { expect } from 'chai';
import Trie from '../lib/prefixTrie'

describe('TRIE', () => {

  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  });

  it('should set its default root to null', () => {
    expect(trie.root).to.eq(null);
  });
  
  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.totalWords).to.eq(0);
    trie.insert('poop')
    expect(trie.totalWords).to.eq(1)
  });
 