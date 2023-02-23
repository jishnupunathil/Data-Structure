class Stack {
  constructor() {
    this.stack = [];
  }

  push(elem) {
    this.stack.push(elem);
  }

  pop() {
    this.stack.pop();
  }

  display() {
    console.log(this.stack);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  middle() {
    const middleIndex = Math.ceil(this.stack.length / 2);
    const tempStack = [];
    while (this.stack.length > middleIndex) {
      tempStack.push(this.stack.pop());
    }
    this.stack.pop();
    while (tempStack.length > 0) {
      this.stack.push(tempStack.pop());
    }

    return this.stack;
  }
  reverse(){
    let tempStack=[]

    while(this.item.length>0){
        tempStack.push(this.item.pop())
    }

    this.item=tempStack
}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7)
stack.display();
console.log(stack.middle());
// stack.reverse()
