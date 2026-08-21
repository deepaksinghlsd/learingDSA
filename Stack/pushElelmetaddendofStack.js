class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        return this.stack.push(value);
    }

    pushAtEnd(value) {
        if (this.stack.length === 0) {
            this.stack.push(value);
            return;
        }

        let top = this.stack.pop();

        this.pushAtEnd(value);

        this.stack.push(top);
    }
}

let stack = new Stack();

stack.push(10);
console.log(stack)
stack.push(20);


console.log(stack)

stack.pushAtEnd(2);

console.log(stack)