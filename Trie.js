class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
        this.wordCount = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
        node.wordCount++;
    }

    search(word) {
        let node = this.root;

        for(let char of word) {
            if(!node.children[char]) return false;
               node = node.children[char];
        }
        return node.isEnd;
    }

    startsWithPrefix(prefix) {
        let node = this.root;

        for(let char of prefix) {
            if(!node.children[char]) return false;
            
            node = node.children[char];
        }
        return true;
    }

    printWords(node = this.root, word="") {
        if(node.isEnd) {
            console.log(word);
        }

        for(let char in node.children) {
            this.printWords(node.children[char], word+char);
        }
    }

    wordCount(word) {
      let node = this.root;
      for(let char of word) {
        if(!node.children[char]) return 0;
        node = node.children[char];
      }
      return node.wordCount;
    }

    prefixCount(prefix) {
      let node = this.root;

      for(let char of prefix) {
        if(!node.children[char]) return 0;
        node = node.children[char];
      }
      return this._dfsCount(node);
    }
    _dfsCount(node) {
      let count = node.wordCount;

      for(let char in node.children) {
        count += this._dfsCount(node.children[char]);
      }
      return count;
    }
}

const trie = new Trie();
trie.insert('ahmed');
trie.insert('zuhair');
trie.insert('anas');
trie.insert('zubair');
trie.insert('anan')
trie.insert('salam');
trie.insert('zubair');
trie.insert('anan')
trie.printWords();
console.log(trie.wordCount('zubair'));
console.log(trie.prefixCount('zu'))

// find and convert to shortest prefix - solution //

let dictionary = ['cat', 'bat', 'rat'];
let sentence = 'the cattle was rattled by th battery';

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    
    for(let char of word) {
      if(!node.children[char]){
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }
  
  findPrefix(word) {
    let node = this.root;
    let prefix = '';
    
    for (let char of word) {
      if(!node.children[char]) return word;
      
      prefix += char;
      node = node.children[char];
      
      if(node.isEnd) {
        return prefix;
      }
    }
    return word;
  }
}

function replaceWords(dictionary, sentence) {
  let trie = new Trie();
  
  for(let root of dictionary) {
    trie.insert(root);
  }
  
  let words = sentence.split(' ');
  
  for(let i=0; i<words.length; i++) {
    words[i] = trie.findPrefix(words[i]);
  }
  return words.join(" ");
}

console.log(replaceWords(dictionary, sentence))
