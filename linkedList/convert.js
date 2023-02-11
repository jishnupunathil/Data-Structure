const arr = [1, 2, 3, 4, 5];

class Node{
  constructor(value){
  this.value=value
  this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  append(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
      this.tail=node
    }
    else{
      node.next=this.tail.next
      this.tail=node
    }
    this.size++
  }

  toLinkedList(arr){
    for(let i=0;i<arr.length;i++){
      this.append(arr[i])
    }
  }

  removeFormIndex()
}

const list=new LinkedList()
console.log(list);
list.toLinkedList(arr)
console.log(list);