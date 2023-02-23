class QueueUsingStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    enqueue(elem){
        this.stack1.push(elem)
    }

    dequeue(){
        if(this.stack1.length===0&&this.stack2.length===0){
            return 'queue is empty'
        }

        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    isEmpty() {
        return (this.primaryQueue.length === 0);
      }
}

const queue=new QueueUsingStack()
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue);
queue.dequeue()
console.log(queue);
console.log(queue.dequeue());