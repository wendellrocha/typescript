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
