//vetores bubble
// vetor A
let bubblevetorA = []
for (let i = 1; i <= 100000; ++i) {
    bubblevetorA.push(i)
}
// vetor B
let bubblevetorB = []
for (let i = 100000; i >= 1; --i) {
    bubblevetorB.push(i)
}
// vetor C
let bubblevetorC = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    bubblevetorC.push(getRandom(1, 100000))
}
function Bubblesort(arr) {
    const sortedArray = Array.from(arr);
    let swap;
    do {
        swap = false;
        for (let i = 1; i < sortedArray.length; ++i) {
            if (sortedArray[i - 1] > sortedArray[i]) {
                [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
                swap = true;
            }
        }
    } while (swap)
    return sortedArray;
}


const BubbleSort = function (medir) {
    let x = new Date().getTime()
    Bubblesort(bubblevetorA)
    let f = new Date().getTime()
    let t = f - x
    console.log(`o tempo de execução para ordenar o vetor A foi de :${t}ms`)
    document.getElementById("bubblea").value = t
    let a = new Date().getTime()
    Bubblesort(bubblevetorB)
    let b = new Date().getTime()
    let c = b - a
    console.log(`o tempo de execução para ordenar o vetor B foi de :${c}ms`)
    document.getElementById("bubbleb").value = c
    let g = new Date().getTime()
    Bubblesort(bubblevetorC)
    let d = new Date().getTime()
    let e = d - g
    console.log(`o tempo de execução para ordenar o vetor C foi de :${e}ms`)
    document.getElementById("bubblec").value = e
}