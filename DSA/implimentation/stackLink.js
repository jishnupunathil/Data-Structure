class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
    }

    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        } else{
            node.next=this.top
            this.top=node
        }
    }

    pop(){
        if(!this.top)
        return null
        else{
            this.top=this.top.next
        }
    }

    peek(){
        return this.top.value
    }

    display(){
        let curr_node=this.top
        let list=''
        while(curr_node){
            list+=`${curr_node.value} `
            curr_node=curr_node.next
        }
        console.log(list);
    }

    reverse(){
        let prev=null
        let next=null
        let curr=this.top
        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.top=prev
}

deletMid(){

}

}
const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
// console.log(stack.peek());
// console.log(stack);
stack.pop()
// console.log(stack);
// console.log(stack.peek());
stack.display()
stack.reverse()
stack.display()