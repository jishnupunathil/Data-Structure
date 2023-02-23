class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(elem){
        this.queue.push(elem)
    }

    dequeue(){
        this.queue.shift()
    }

    peek(){
        return this.queue[0]
    }
}

const queue=new Queue()
queue.enqueue(9)
queue.enqueue(4)
console.log(queue.peek());