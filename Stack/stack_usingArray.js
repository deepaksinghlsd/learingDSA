class Stack {
    constructor(){
        this.stack = []
    }


    push(value){
        this.stack.push(value);
    }

    pop(){
        if(this.stack.length === 0) {
            return "Stack is Emapty"
        }
        return this.stack.pop()
    }

    peak(){
        if(this.stack.length === 0){
            return "Stack is emplty"
        }

        return this.stack[this.stack.length-1]
    }

    isemplty (){
        return this.stack == 0
    }

    size () {
        return this.stack.length
    }
}


// create new stack 

let stack = new Stack()

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peak())
console.log(stack.isemplty())
console.log(stack.pop())

console.log(stack)