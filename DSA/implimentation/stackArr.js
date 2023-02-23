class Stack{
    constructor(){
        this.stack=[]
    }

    push(elem){
        this.stack.push(elem)
    }
    pop(){
        this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length-1]
    }

   
}

const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
// stack.push(7)
// stack.push(8)
// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
// console.log(stack);
// console.log(stack.reverse());
console.log(stack);
console.log(stack.middle());