class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(elem) {
    this.queue.push(elem);
  }

  dequeue() {
    return this.queue.shift();
  }

  print() {
    console.log(this.queue.toString());
  }

  peek() {
    console.log(this.queue[0]);
  }

  middleas(){
    // let middleIndex=Math.floor(this.queue.length/2)
    // let tempQueue=[]
    // for (let i = 0; i < middleIndex; i++) {
    //   this.enqueue(this.dequeue());
    // }
    // this.dequeue()


    // for (let i = 0; i < middleIndex; i++) {
    //   tempQueue.push(this.dequeue());
    // }
    // while (tempQueue.length > 0) {
    //   this.enqueue(tempQueue.shift());
    // }

    // return this.queue

    let mid=Math.floor(this.queue.length/2)
console.log(mid);
for(let i=0;i<=this.queue.length;i++){
    if(this.queue[i]!==this.queue[mid]){
        this.queue.push(this.queue.shift())
    }else{
        this.queue.shift()
    }
}
console.log(this.queue);

  }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
// queue.enqueue(6)
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(9)


queue.print();
queue.middleas()
// queue.middleas()
// queue.middleas()
// queue.middleas()
// queue.middleas()
// queue.middleas()
// queue.middleas()
// queue.peek();
