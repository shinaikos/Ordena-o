// vetor A
let mergevetorA = []
for (let i = 1; i <= 100000; ++i) {
    mergevetorA.push(i)
}
// vetor B
let mergevetorB = []
for (let i = 100000; i >= 1; --i) {
    mergevetorB.push(i)
}
// vetor C
let mergevetorC = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    mergevetorC.push(getRandom(1, 100000))
}
function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergesort(arr.slice(0, mid));
    var subRight = mergesort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge(node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    return result.concat(node1.length ? node1 : node2);
}


const mergeSort = function () {
    let x = new Date().getTime()
    mergesort(mergevetorA)
    let f = new Date().getTime()
    let t = f - x
    console.log(`o tempo de execução para ordenar o vetor A foi de :${t}ms`)
    document.getElementById("mergea").value = t
    let a = new Date().getTime()
    mergesort(mergevetorB)
    let b = new Date().getTime()
    let c = b - a
    console.log(`o tempo de execução para ordenar o vetor B foi de :${c}ms`)
    document.getElementById("mergeb").value = c
    let g = new Date().getTime()
    mergesort(mergevetorC)
    let d = new Date().getTime()
    let e = d - g
    console.log(`o tempo de execução para ordenar o vetor C foi de :${e}ms`)
    document.getElementById("mergec").value = e
}