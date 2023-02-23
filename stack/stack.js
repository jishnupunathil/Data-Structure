// class Stack {
//   constructor() {
//     this.item = [];
//   }

//   push(elem) {
//     this.item.push(elem);
//   }

//   pop() {
//     this.item.pop();
//   }

//   print() {
//     console.log(this.item);
//   }

//   peek() {
//     return this.item[this.item.length - 1];
//   }

//   isEmpty() {
//     return this.item.length === 0;
//   }

//   size() {
//     return this.item.length;
//   }
// }

// const stack = new Stack();
// stack.push(7);
// stack.push(89);
// stack.push(6);
// stack.push(12);
// stack.print();
// console.log(stack.peek());


class Stack{
  constructor(){
    this.items=[]
  }

  push(elem){
    this.items.push(elem)
  }

  pop(){
    this.items.pop()
  }

  display(){
    console.log(this.items);
  }

  peek(){
    return this.items[this.items.length-1]
  }

  middle() {
    const middleIndex = Math.floor(this.items.length / 2)
    const tempStack = [];
    while (this.items.length > middleIndex) {
      tempStack.push(this.items.pop());
    }
    this.items.pop();
    while (tempStack.length > 0) {
      this.items.push(tempStack.pop());
    }

    return this.items
  }

  reverses(){
    let tempStack=[]
    while(this.items.length>0){
      tempStack.push(this.items.pop())
    }
    this.items=tempStack
  }
}
  


const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.display()


stack.reverses()
console.log(stack.middle())
stack.display()

