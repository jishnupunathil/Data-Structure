// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=0
//         this.tail=0
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     removeFromFront(){
//          if(this.isEmpty()){
//             return null
//          }else{
//             // const value=this.head.values
//             this.head=this.head.next
//             this.size--
//          }
//     }

//     print(){
//         let curr=this.head
//         let listValue=''
//         while(curr){
//             listValue+=`${curr.values} `
//             curr=curr.next
//         }
//         console.log(listValue)
//     }

//     getSize(){
//         return this.size
//     }
// }

// class linkedListStack{
//     constructor(){
//         this.list=new linkedList()
//     }
//     push(values){
//         this.list.prepend(values)
//     }

//     print(){
//         this.list.print()
//     }

//     peek(){
//         return this.list.head.values
//     }
//     pop(){

//         this.list.removeFromFront()

//     }
//     isEmpty(){
//         return this.list.isEmpty()
//     }

//     size(){
//         return this.list.getSize()
//     }
// }

// const stack=new linkedListStack()
// stack.push(29)
// stack.print()
// stack.push(27)
// stack.print()
// stack.push(21)
// stack.print()
// stack.push(22)
// stack.print()
// stack.push(224)
// console.log(stack.peek())
// stack.pop()
// stack.print()
// stack.push(899898)
// stack.print()
// console.log(stack.peek())
// // stack.pop
// console.log(stack.isEmpty());
// console.log(stack.size()); 





// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=0
//         this.tail=0
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     prepend(value){
//         const node=new Node(value)
//         if(!this.isEmpty){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     removeFromFront(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             this.head=this.head.next
//             this.size--
//         }
//     }

//     print(){
//         let curr=this.head
//         let listValue=''
//         while(curr){
//             listValue+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listValue);
//     }
// }

// class Stack{
//     constructor(){
//         this.list=new linkedList()
//     }

//     push(value){
//         this.list.prepend(value)
//     }
//     pop(){
//         this.list.removeFromFront()
//     }
//     print(){
//         this.list.print()
//     }

//     peek(){
//         return this.list.head.value
//     }
// }

// const stack=new Stack()
// stack.push(67)
// stack.push(89)
// stack.push(56)
// stack.print()
// console.log(stack.peek())
// stack.push(89)
// console.log(stack.peek())


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    push(value)
    {
        const node=new Node(value)
        if(!this.top){
            this.top=node
            
        }else{
            node.next=this.top
            this.top=node
                
        }
        this.size++
    }
    pop(){
        if(!this.top){
            return null
            
        }else{
            this.top=this.top.next
            this.size--
        }
    }
    peek(){
        return this.top.value

    }
    isEmpty(){
       return this.size===0
    }
}

const stack=new Stack()
stack.isEmpty()
stack.push(67)
stack.push(89)
stack.push(78)
console.log(stack);
stack.pop()
console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty())
// stack.print()


