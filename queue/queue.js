// class Queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(elem){
//     this.items.push(elem)
//     }

//     dequeue(){
//       return  this.items.shift()
//     }

//     print(){
//         console.log(this.items.toString());
//     }
    
//     isEmpty(){
//         return this.items.length===0
//     }

//     peek(){
//         if(!this.isEmpty()){
//         console.log(this.items[0])
//         }
//         else{
//             return null
//         }
//     }
// }

// const queue=new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(722)
// queue.enqueue(73)
// queue.enqueue(711)
// queue.enqueue(7213)
// queue.peek()
// console.log(queue.isEmpty())
// queue.print()
// console.log( queue.dequeue())



class Queue{
    constructor(){
        this.item=[]
    }

    isEmpty(){
        return this.item.length===0
    }

    enqueue(elem){
        this.item.push(elem)
    }

    dequeue(){
        return this.item.shift()
    }

    print(){
        console.log(this.item.toString());
    }

    peek(){
        console.log(this.item[0]);
    }
}


const queue=new Queue()

queue.enqueue(56)
queue.enqueue(89)
queue.enqueue(7)
queue.print()
queue.peek()