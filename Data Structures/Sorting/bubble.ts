export function bubbleSort<T> (array: T[], leftIndex: number, rightIndex: number): void {
    if(array == null || rightIndex < array.length) {
        throw new Error("Argumento inválido");
    }

    for(let i = leftIndex; i < rightIndex; i++) {
        for(let j = leftIndex; j < rightIndex; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
}


export function bubblesort<T>(array: T[]): void {
    if(array == null) {
        throw new Error("Argumento inválido");
    }

    let trocou: boolean;
    trocou = true;
    
    while(trocou) {
        trocou = false;
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                swap(array, i, i+1);
                trocou = true;
            }
        }
    }
}

export function swap(array: any, i: number, j: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}