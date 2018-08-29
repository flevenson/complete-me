import { expect } from 'chai';
import Trie from '../lib/prefixTrie'
import Node from '../lib/Node';
import fs from 'fs';

describe('TRIE', () => {

  let trie;

  beforeEach(() => {
    trie = new Trie();
    const text = "/usr/share/dict/words";
    const dictionary = fs.readFileSync(text).toString().trim().split('\n');
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  });

  // it('should set its default root to an empty object', () => {
  //   expect(trie.root).to.deep.equal({});
  // });

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.totalWords).to.equal(0);
    trie.insert('poop')
    expect(trie.totalWords).to.equal(1)
  });

  it('should insert word correctly when calling insert', () => {

    trie.insert('he')
    trie.insert('hell');
    trie.insert('hello');
    trie.insert('help');
    // let h = new Node ('h');
    // console.log(JSON.stringify(trie, null, 4));

    expect(trie.root).to.have.property('h')
  });

  it('should suggest an array of words', () => {
    trie.insert('hello');
    trie.insert('help');
    trie.insert('poop');

    let response = trie.suggest('hel')
    expect(response).to.deep.equal(['hello', 'help'])
  })

  it('should populate with words', () => {
    trie.populate(dictionary);
    console.log(JSON.stringify(trie,null,4))
    expect(trie.totalWords).to.eq(235886)

  })
 });