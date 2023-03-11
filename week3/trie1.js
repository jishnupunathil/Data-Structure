class Node{
    constructor(){
        this.children={}
        this.wordEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

   insert(word){
    let curr=this.root
    for(let i=0;i<word.length;i++){
        let insertWord=word[i]
        if(!curr.children[insertWord]){
            curr.children[insertWord]=new Node()
        }
        curr=curr.children[insertWord]
    }
    curr.wordEnd=true
   }

  search(key){
    let curr=this.root
    for(i=0;i<key.length;i++){
        let searchWord=key[i]
        if(!curr.children[searchWord]){
            return false
        }
        curr=curr.children[searchWord]
    }
    return curr.wordEnd
  }
}

const trie=new Trie()

trie.insert('a')
trie.insert('b')
trie.insert('acdf')
trie.insert('bs')
console.log(trie);