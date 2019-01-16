"use strict";
exports.__esModule = true;
function bubbleSort(array, leftIndex, rightIndex) {
    if (array == null || rightIndex < array.length) {
        throw new Error("Argumento inválido");
    }
    for (var i = leftIndex; i < rightIndex; i++) {
        for (var j = leftIndex; j < rightIndex; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}
exports.bubbleSort = bubbleSort;
function bubblesort(array) {
    if (array == null) {
        throw new Error("Argumento inválido");
    }
    var trocou;
    trocou = true;
    while (trocou) {
        trocou = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                trocou = true;
            }
        }
    }
}
exports.bubblesort = bubblesort;
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
exports.swap = swap;
var array;
array = [6, 4, 3, 7, 8, 1, 0];
console.info("bubbleSort array " + array);
bubbleSort(array, 0, 7);
console.log(array);
// [0, 1, 2, 4, 6, 7, 8]
console.info("----------------------");
console.info("bubbleSort arrayOne error");
var arrayOne;
arrayOne = [3, 1, 5, 7, 10, 6, 11, 9, 20, 2, 4, 8, 12, 15, 99];
try {
    bubbleSort(arrayOne, 15, 0);
}
catch (_a) {
    console.log("Error");
}
// erro
console.info("----------------------");
console.info("bubbleSort arrayOne " + arrayOne);
bubbleSort(arrayOne, 0, 15);
console.log(arrayOne);
console.info("----------------------");
var arrayTwo;
arrayTwo = [6, 4, 3, 7, 8, 1, 0];
console.info("bubblesort array " + arrayTwo);
bubblesort(arrayTwo);
console.log(arrayTwo);
console.info("----------------------");
var arrayThree;
arrayThree = [3, 1, 5, 7, 10, 6, 11, 9, 20, 2, 4, 8, 12, 15, 99];
console.info("bubblesort arrayThree: " + arrayThree);
bubblesort(arrayThree);
console.log(arrayThree);
console.info("----------------------");
