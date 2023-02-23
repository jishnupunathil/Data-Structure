class Queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    enqueue(elem){
        this.stack1.push(elem)
    }

    dequeue(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
            this.stack2.pop()
            
            while(this.stack2.length>0){
                this.stack1.push(this.stack2.pop())
            }
        }
    }
}

const queue=new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue);
queue.dequeue()
console.log(queue);