class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }


    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        let curr=this.head
        let listValue=''
        while(curr){
            listValue+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValue);
    }

    append(value){

        const node=new Node(value)

        if(this.isEmpty()){

            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++

    }

    insert(value,index){
        if(index<0||index>this.size){
            return null
        }
        else if(index==0){
            this.append(value)
        }
        else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }

    removeIndex(index){
        let removedNode
    if(index<0||index>this.size){
        return null
    }
    else if(index===0){
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
        if(this.isEmpty()){
            return null
        }
        else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
        }

    }
}

const list=new LinkedList()

list.prepend(5)
list.prepend(9)
list.prepend(51)
list.prepend(89)
list.append(8)
list.append(82)
list.insert(7,2)
list.insert(178,5)
console.log(list.removeIndex(5))
list.removeValue(51)
list.print()
