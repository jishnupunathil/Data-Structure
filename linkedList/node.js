class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
    // return removeNode.value
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return console.log("cannot insert");
    if (index == 0) this.prepend(value);
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeNode(index) {
    if (index < 0 || index > this.size) return null;
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value=== value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null
    }
  }

  search(value){
    if(this.isEmpty()){
        return -2
    }
    let i=0
    let curr=this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++
    }
    return -4
  }

}

const list = new linkedList();

// console.log('list is empty?',list.isEmpty());
// console.log('list size',list.getSize());
list.print();

// list.append(15)
// list.print()
// list.append(52)
// list.append(25)
// list.print()

// list.append(2)
// list.append(25)
// list.append(52)
// list.append(225)
// list.append(5233)
// list.append(25123)
// list.print()

list.insert(10, 0);
list.print();
list.insert(20, 0);
list.print();
list.insert(15, 1);
list.print();
list.insert(11, 2);
list.print();
// list.insert(10,5)
// list.print()
console.log(list.removeNode(2));
list.print();
console.log(list.removeNode(2));
list.print();
list.insert(11, 2);
list.print();
// console.log(list.removeNode(1));
list.print();
list.removeValue(15)
list.print()
console.log(list.search(11))