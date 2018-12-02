//Selection vetores 
// vetor A
let selectionvetorA = []
for (let i = 1; i <= 100000; ++i) {
    selectionvetorA.push(i)
}
// vetor B
let selectionvetorB = []
for (let i = 100000; i >= 1; --i) {
    selectionvetorB.push(i)
}
// vetor C
let selectionvetorC = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    selectionvetorC.push(getRandom(1, 100000))
}
function selectionsort(arr) {

    let temp = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return (arr);
}


const selectionSort = function (medir) {
    let x = new Date().getTime()
    selectionsort(selectionvetorA)
    let f = new Date().getTime()
    let t = f - x
    console.log(`o tempo de execução para ordenar o vetor A foi de :${t}ms`)
    document.getElementById("selectiona").value = t
    let a = new Date().getTime()
    selectionsort(selectionvetorB)
    let b = new Date().getTime()
    let c = b - a
    console.log(`o tempo de execução para ordenar o vetor B foi de :${c}ms`)
    document.getElementById("selectionb").value = c
    let g = new Date().getTime()
    selectionsort(selectionvetorC)
    let d = new Date().getTime()
    let e = d - g
    console.log(`o tempo de execução para ordenar o vetor C foi de :${e}ms`)
    document.getElementById("selectionc").value = e
}