class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
    this.head=null
    this.size=0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        else{
            let curr=this.head
            let listValue =''
            while(curr){
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue);
        }
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++

    }

    insert(value,index){
        if(index<0||index>this.size){
            return null
        }
        if(index===0){
            this.prepend(value)
        }
        else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    removeNode(index){

        if(index<0||index>this.size)
        return null
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }
        else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty())
        return null
        else{
            let prev=this.head
            let removedNode
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }

            if(prev.next){
                removedNode=prev.next
                prev.next=removedNode.next
            }
            this.size--
            return removedNode.value
        }
    }

    search(value){

        if(this.isEmpty()){
            return null
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr=curr.next
            i++
        }
        return -2
        
    }

    middle(){
        if(this.isEmpty()){
            return -1
        }
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
    }
}

const list=new linkedList
console.log(list.isEmpty());
list.prepend(10)
list.prepend(20)
console.log(list.isEmpty());
console.log(list.getSize());
list.print()
list.append(800)
list.print()
list.append(4)
list.print()
list.insert(12,2)
list.insert(15,2)
list.insert(1111,2)
list.print()
console.log(list.middle())
// list.removeNode(3)
// list.print()
// console.log(list.search(10))