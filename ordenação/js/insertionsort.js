//vetores insertion -----------------------------------------------------------------------------------------
// vetor A
let insertionvetorA = []
for (let i = 1; i <= 100000; ++i) {
    insertionvetorA.push(i)
}
// vetor B
let insertionvetorB = []
for (let i = 100000; i >= 1; --i) {
    insertionvetorB.push(i)
}
// vetor C
let insertionvetorC = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    insertionvetorC.push(getRandom(1, 100000))
}
function insertionsort(array) {
    var length = array.length;

    for (var i = 1, j; i < length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }

    return array;
}


const insertionSort = function (medir) {
    let x = new Date().getTime()
    insertionsort(insertionvetorA)
    let f = new Date().getTime()
    let t = f - x
    console.log(`o tempo de execução para ordenar o vetor A foi de :${t}ms`)
    document.getElementById("insertiona").value = t
    let a = new Date().getTime()
    insertionsort(insertionvetorB)
    let b = new Date().getTime()
    let c = b - a
    console.log(`o tempo de execução para ordenar o vetor B foi de :${c}ms`)
    document.getElementById("insertionb").value = c
    let g = new Date().getTime()
    insertionsort(insertionvetorC)
    let d = new Date().getTime()
    let e = d - g
    console.log(`o tempo de execução para ordenar o vetor C foi de :${e}ms`)
    document.getElementById("insertionc").value = e

}