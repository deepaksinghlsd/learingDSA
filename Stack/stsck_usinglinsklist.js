class Node {
    constructor (value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor (){
        this.top = null ;
    }

    push (value){
        let newNode = new Node(value);

        newNode.next = this.top ; 

        this.top =newNode ; 
    }

    pop(){
        if(this.top === null){
            return "Stack is imperty"
        }
        let remove = this.top.value ; 
        this.top = this.top.next ; 
        return remove ;
    }


    // find top emmple in stack 

    peak(){
        if (this.top === null){
            return "stack is emparty"
        }

        return this.top.value ;
    }

    isempty(){
        return this.top === null ;
    }
}

let stack = new Stack()

stack .push(10);
stack .push(20);

console.log(stack.pop())
console.log(stack.isempty())
console.log(stack.peak())


