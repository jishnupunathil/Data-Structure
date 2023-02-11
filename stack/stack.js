// class Stack{
//     constructor(){
//         this.items=[]
//     }

//     push(elem){
//         this.items.push(elem)
//     }
//     pop(){
//         this.items.pop()
//     }
//     print(){
//         console.log(this.items.toString());
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     size(){
//         return this.items.length
//     }
// }

// const stack=new Stack()
// console.log(stack.isEmpty());
// console.log(stack.size());

// stack.push(90)
// stack.push(10)
// stack.push(910)
// stack.push('sdfsdf')
// stack.push([1,2,3,4,5])
// stack.push(data={'hey':'asdfsda'})
// // stack.pop()
// stack.print()
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());



class Stack{
    constructor(){
        this.item=[]
    }

    push(elem){
        this.item.push(elem)
    }

    pop(){
        this.item.pop()
    }

    print(){
        console.log(this.item)
    }

    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length===0
    }

    size(){
        return this.item.length
    }
}

const stack=new Stack()
stack.push(7)
stack.push(89)
stack.push(6)
stack.push(12)
stack.print()
console.log(stack.peek())
