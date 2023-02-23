class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }

    enqueue(value){
        const node=new Node(value)
        if(!this.front){
        this.front=node
        this.rear=node
    }else{
            this.rear.next=node
            this.rear=node
        }
    }

    dequeue(){
        if(!this.front){
            return null
        }else{
            this.front=this.front.next
        }
    }
}
const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue);
queue.dequeue()
console.log(queue);