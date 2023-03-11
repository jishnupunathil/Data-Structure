class Node{
    constructor(){
        this.children={}
        this.wordEnd=false
    }
}
class Trie{
    constructor(){
        this.root= new Node()
    }
    insert(word){
        let curr= this.root 
        for(let i=0;i<word.length;i++){
            let insertWord=word[i]
            if(!curr.children[insertWord]){
                curr.children[insertWord]=new Node()
            }
            curr=curr.children[insertWord]
        }
        return curr.wordEnd=true
    }
    search(key){ 
        let curr=this.root
        for(let i=0;i<key.length;i++){
            let searchWord=key[i]
            if(!curr.children[searchWord]){
                return false
            }
            curr=curr.children[searchWord]
        }
        return curr.wordEnd
    }
    startWith(prefix){
        let curr=this.root
        for(let i=0;i<prefix.length;i++){
            let prefixWord=prefix[i]
            if(!curr.children[prefixWord]){
                return false
            }
            curr=curr.children[prefixWord]
        }
        return true
    } 
}


const trie=new Trie()

// trie.insert('a')
// trie.insert('b')
console.log(trie.insert('cat'))

trie.insert('arju')
// console.log(trie.startWith('cas'));

console.log(trie.search('arju'));
console.log(trie);
