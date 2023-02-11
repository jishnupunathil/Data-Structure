class Stack {
  constructor() {
    this.item = [];
  }

  push(elem) {
    this.item.push(elem);
  }

  pop() {
    this.item.pop();
  }

  print() {
    console.log(this.item);
  }

  peek() {
    return this.item[this.item.length - 1];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }
}

const stack = new Stack();
stack.push(7);
stack.push(89);
stack.push(6);
stack.push(12);
stack.print();
console.log(stack.peek());
