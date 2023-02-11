class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }
  pop() {
    if (!this.top) {
      return null;
    } else {
      this.top = this.top.next;
      this.size--;
    }
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.isEmpty();
stack.push(67);
stack.push(89);
stack.push(78);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
