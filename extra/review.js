class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  print() {
    let curr = this.head;
    let listValue = "";
    while (curr) {
      listValue += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValue);
  }

  arrayTolinkedlist(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }

    this.print();
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    const node = new Node(value);
    if (index === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  reverse() {
    let prev = null;
    let next = null;
    let curr = this.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  removeNode(index) {
    if (this.isEmpty()) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    // let removedNode
    if (this.head.value === value) {
      // let removedNode=this.head
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return removedNode;
      }
    }
  }
}

const list = new LinkedList();

// list.append(12)
// list.append(23)
// list.append(67)
// list.print()

let arr = [1, 2, 3, 4, 5];
list.arrayTolinkedlist(arr);

// list.insert(10,0)
// list.insert(30,1)
// list.insert(20,1)
// list.print()
// list.reverse()
// list.print()
// list.removeNode(1)
// list.print()
// console.log(list.getSize())
// list.removeValue(10)
// console.log(list.getSize())
