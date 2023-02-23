class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    addToTail(key,value){
        const node=new Node(key,value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
    }
}

class HashTable{
    constructor(size){
        this.table=new Array(size)
    }

    hash(key){
        let address=0
        for(let i=0;i<key.length;i++)
        address+=key.charCodeAt(i)
        return address%this.table.length
    }

    set(key,value){
        let index=this.hash(key)
        if(!this.table[index])
        this.table[index]=new LinkedList()
        let currentNode=this.table[index].head
        while(currentNode){
            if(currentNode.key===key){
                currentNode.value=value
            }
            currentNode=currentNode.next
        }
        this.table[index].addToTail(key,value)
        return this.table[index]
    }

    get(key){
        let index=this.hash(key)
        if(!this.table[index]){
        return null
        }
        else{
            let currentNode=this.table[index].head
            while(currentNode){
                if(currentNode.key===key){
                    return currentNode.value
                        }
                        currentNode=currentNode.next
    }
}
}


remove(key) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    } else {
      let currentNode = this.table[index].head;
      let previousNode = null;
      while (currentNode) {
        if (currentNode.key === key) {
          if (previousNode === null) {
            this.table[index].head = currentNode.next;
          } else {
            previousNode.next = currentNode.next;
          }

          if (currentNode === this.table[index].tail) {
            this.table[index].tail = previousNode;
          }

          return currentNode.value;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return undefined;
    }
  }

}

const hash=new HashTable(10)
console.log(hash.set('name','jishnu'))
console.log(hash.set('name','jissssss'));
// console.log(hash.set('per','john'));
// console.log(hash.get('pers'));
console.log(hash.remove('name'))
// console.log(hash);

//       return undefined;
//     }
//   }

// console.log(hash);
console.log(hash.get('name'));




