class Stack {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.queue.length === 0) return null;
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
  }
}


const stack = new Stack();
stack.push(3);
stack.push(78);
stack.push(87);
stack.pop()
console.log(stack);