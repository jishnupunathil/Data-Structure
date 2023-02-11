class Queue{
    constructor(){
        this.item={}
        this.rear=0
        this.front=0
    }

    enqueue(elem){
        this.item[this.rear]=elem
        this.rear++
    }

    dequeue(){
        const item=this.item[this.front]
        delete this.item[this.front]
        this.front++
        return item

    }
    
}

const queue=new Queue
queue.enqueue(234)
queue.enqueue(23)
queue.enqueue(234)
queue.enqueue(23)
console.log(queue);
queue.dequeue()
console.log(queue);