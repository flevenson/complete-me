import Node from './Node';

export default class Trie {
  constructor () {
    this.totalWords = 0;
    this.root = new Node ();
  }

  count() {
    return this.totalWords;
  };

  insert(word) {
    let currNode = this.root;
    let wordArray = [...word];
    this.insertRecursive (wordArray, currNode)
    this.totalWords++;
  }

  insertRecursive (wordArray, currNode) {
    if (wordArray.length < 1) {
      currNode.end = true;
      return;
    }

    if (currNode[wordArray[0]]) {
      currNode = currNode[wordArray.shift()];
    } else {
      let letter = wordArray[0]
      currNode[letter] = new Node ();
      currNode = currNode[letter];
      wordArray.shift ();
    }

    return this.insertRecursive (wordArray, currNode);
  }

  suggest(string) {
     let wordArray = [...string]
   if (Object.keys(this.root).includes(wordArray[0])) {
     let path = wordArray.reduce( (key, letter) => {
      // console.log(key[letter])
       return key[letter];
     }, this.root);

     return this.getWords(path, string);
   } else {
     return "no words";
   }

 }

 getWords(path, string) {
   let results = [];

   let arr = object.keys(path);

   arr.forEach( key => {
     if (key !== 'end') {
       results.push(...this.getWords(path[key], string + key));
     } else if (path.end) {

       results.push(string);
     }
   })
   console.log(results)
   return results;
  }

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    })
  }
  // suggest(word) {
  //   let currNode = this.root;
  //   let wordArray = [...word];
  //   recursiveResult = this.suggestRecursive(wordArray, currNode);
  //   return recursiveResult
  // }

  // suggestRecursive(wordArray, currNode) {
  //   if(Object.keys(currNode.children).length === 0) {

  //     return recursiveResult

  //   } else {

  //     if (Object.keys(currNode.children.length > 0)) {

  //     } else if (currNode.end) {

  //     }
  //   }
  //   return suggestRecursive(wordArray, currNode)
  // }
}