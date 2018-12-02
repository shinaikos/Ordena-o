//quick vetores
// vetor A
let quickvetorA = []
for (let i = 1; i <= 1000; ++i) {
    quickvetorA.push(i)
}
// vetor B
let quickvetorB = []
for (let i = 1000; i >= 1; --i) {
    quickvetorB.push(i)
}
// vetor C
let quickvetorC = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    quickvetorC.push(getRandom(1, 100000))
}
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};


const quickSort = function () {
    let x = new Date().getTime()
    quicksort(quickvetorA)
    let f = new Date().getTime()
    let t = f - x
    console.log(`o tempo de execução para ordenar o vetor A foi de :${t}ms`)
    document.getElementById("quicka").value = t
    let a = new Date().getTime()
    quicksort(quickvetorB)
    let b = new Date().getTime()
    let c = b - a
    console.log(`o tempo de execução para ordenar o vetor B foi de :${c}ms`)
    document.getElementById("quickb").value = c
    let g = new Date().getTime()
    quicksort(quickvetorC)
    let d = new Date().getTime()
    var e = d - g 
    console.log(`o tempo de execução para ordenar o vetor C foi de :${e}ms`)
    document.getElementById("quickc").value =e
}