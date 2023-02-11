class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) return null;
    else this.front = this.front.next;
    this.size--;
  }

  peek() {
    return this.front.value;
  }
}

const queue = new Queue();
queue.enqueue(67);
queue.enqueue(8);
queue.enqueue(4);
console.log(queue);
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
