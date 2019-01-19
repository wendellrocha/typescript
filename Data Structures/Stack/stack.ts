class Stack<T> {
    private array: T[];
    private top: number;

    constructor() {
        this.array = [];
        this.top = -1;
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    getTop<T>() {
        if (this.isEmpty()) {
            return null;
        }
        return this.array[this.top];
    }

    push(element: T): void {
        this.array[++this.top] = element;
    }

    pop<T>(): void {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        let aux;
        aux = this.array[this.top];
        this.array.splice(this.top);
        this.top--;
        return aux;
    }
   
    toArray(): Array<T> {
        return this.array;
    }

    toString(): string {
        return this.array.toString();
    }
}