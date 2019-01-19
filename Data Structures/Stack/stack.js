var Stack = /** @class */ (function () {
    function Stack() {
        this.array = [];
        this.top = -1;
    }
    Stack.prototype.isEmpty = function () {
        return this.top === -1;
    };
    Stack.prototype.getTop = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.array[this.top];
    };
    Stack.prototype.push = function (element) {
        this.array[++this.top] = element;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        var aux;
        aux = this.array[this.top];
        this.array.splice(this.top);
        this.top--;
        return aux;
    };
    Stack.prototype.toArray = function () {
        return this.array;
    };
    Stack.prototype.toString = function () {
        return this.array.toString();
    };
    return Stack;
}());
var stack = new Stack();
console.log("Top: " + stack.getTop());
stack.push(1);
console.log(stack.toArray());
stack.push(4);
console.log(stack.toArray());
console.log("Top: " + stack.getTop());
stack.push(6);
console.log(stack.toArray());
stack.push(10);
console.log(stack.toArray());
console.log("Top: " + stack.getTop());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
try {
    stack.pop();
}
catch (exception) {
    console.log(exception.message);
}
