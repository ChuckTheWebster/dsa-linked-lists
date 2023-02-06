/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val); // assign new node

    if (this.head === null) this.head = newNode; // is list empty?

    if (this.tail !== null) this.tail.next = newNode; // give next val of tail the new Node val

    this.tail = newNode; // reassign the tail to the new node.

    this.length++;

    }



  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // create new node
    let newNode = new Node(val);

    // go to the start of the list
      // if the head is empty, assign new node to head.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // giving the next val the new head
      this.head = newNode; // reassign the head to newNode
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let toPop = this.tail;
    // starting at the head
    let current = this.head;

    for (let length = 1; length < this.length-1; length++){
      current = current.next
    }
    this.tail = current;
    current.next = null;
    this.length--;
    return toPop;
  }


  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
