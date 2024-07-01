class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let LL = new LinkedList(3)
LL.push(2)
LL.push(0)
LL.push(-4)



function convert(op){
    if(op ==="+"){
        return +
    }
    else if(op ==="-"){
        return -
    }
    if(op ==="/")return /
    if(op ==="*")return *
}

convert("-")

//while(temp){
 ///   if(temp===nodeVal){
 //     return index
 //   }
 //   index++
//}