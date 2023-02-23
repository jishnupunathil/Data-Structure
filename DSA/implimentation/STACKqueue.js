// class Stack {
//     constructor() {
//       this.q1 = [];
//       this.q2 = [];
//     }
  
//     push(item) {
//       // Add the new item to the back of q1
//       this.q1.push(item);
//     }
  
//     pop() {
//       if (this.q1.length === 0) {
//         return null;
//       }
  
//       // Move all but the last element from q1 to q2
//       while (this.q1.length > 1) {
//         this.q2.push(this.q1.shift());
//       }
  
//       // The last element in q1 is the one to be removed
//       const popped = this.q1.shift();
  
//       // Swap the names of q1 and q2 to avoid copying elements back to q1
//       [this.q1, this.q2] = [this.q2, this.q1];
  
//       return popped;
//     }
  
//     peek() {
//       if (this.q1.length === 0) {
//         return null;
//       }
  
//       // Move all elements from q1 to q2
//       while (this.q1.length > 0) {
//         this.q2.push(this.q1.shift());
//       }
  
//       // The last element in q2 is the one at the top of the stack
//       const top = this.q2[0];
  
//       // Swap the names of q1 and q2 to avoid copying elements back to q1
//       [this.q1, this.q2] = [this.q2, this.q1];
  
//       return top;
//     }
  
//     size() {
//       return this.q1.length;
//     }
//   }

//   const stack=new Stack()
//   stack.push(1)
//   stack.push(2)
//   stack.push(3)
//   stack.push(4)
//   console.log(stack);
//   stack.pop()
//   console.log(stack);



/*
push(elem){
    this.q1.push(elem)
}

pop(){
    if(this.q1.length===0) return null
    else{
        while(this.q1.length>1){
            this.q2.push(q1.shift())
        }
        let popped=this.q1.shift()
        [this.q1,this,q2]=[this.q2,this.q1]
    }
}


*/


class Stack{
constructor(){
  this.q1=[]
  this.q2=[]
}

push(elem){
  this.q1.push(elem)
}

pop(){
  if(this.q2.length===0){
    while(this.q1.length>1){
      this.q2.push(this.q1.shift())
    }
    this.q1.shift()
  }
  [this.q1,this.q2]=[this.q2,this.q1]
}
}
  const stack=new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  console.log(stack);
  stack.pop()
  console.log(stack);