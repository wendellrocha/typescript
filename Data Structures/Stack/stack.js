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
