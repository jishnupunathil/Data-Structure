class Queue {
  constructor() {
    this.item = [];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  enqueue(elem) {
    this.item.push(elem);
  }

  dequeue() {
    return this.item.shift();
  }

  print() {
    console.log(this.item.toString());
  }

  peek() {
    console.log(this.item[0]);
  }
}

const queue = new Queue();

queue.enqueue(56);
queue.enqueue(89);
queue.enqueue(7);
queue.print();
queue.peek();
