class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(size){
        this.head=null
        this.tail=null
    }

    addToTAil(key,value){
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
        for(let i=0;i<key.length;i++){
            address+=key.charCodeAt(i)
        }

        return address%this.table.length
    }

    set(key,value){

        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=new LinkedList()
        }
        
        this.table[index].addToTAil(key,value)
        return this.table[index]
    }

    get(key){
        let index=this.hash(key)
        if(this.table[index]){
            let curr_node=this.table[index].head
            while(curr_node){
                if(curr_node.key===key){
                    return curr_node.value
                }
                curr_node=curr_node.next
            }
        }
    }
}

const hash=new HashTable(10)
console.log(hash.set('name','jishnu'));
console.log(hash.set('age',20));
console.log(hash.get('age'));
hash.set('name','abc')
console.log(hash.get('name'));
