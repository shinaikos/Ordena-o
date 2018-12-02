
window.onload = function grafico() {
    let bubblea = parseInt(document.getElementById("bubblea").value)
    let bubbleb = parseInt(document.getElementById("bubbleb").value)
    let bubblec = parseInt(document.getElementById("bubblec").value)
    let insertiona = parseInt(document.getElementById("insertiona").value)
    let insertionb = parseInt(document.getElementById("insertionb").value)
    let insertionc = parseInt(document.getElementById("insertionc").value)
    let quicka = parseInt(document.getElementById("quicka").value)
    let quickb = parseInt(document.getElementById("quickb").value)
    let quickc = parseInt(document.getElementById("quickc").value)
    let selectiona = parseInt(document.getElementById("selectiona").value)
    let selectionb = parseInt(document.getElementById("selectionb").value)
    let selectionc = parseInt(document.getElementById("selectionc").value)
    let mergea = parseInt(document.getElementById("mergea").value)
    let mergeb = parseInt(document.getElementById("mergeb").value)
    let mergec = parseInt(document.getElementById("mergec").value)
    Highcharts.chart('container', {

        chart: {
            type: 'bar'
        },
        title: {
            text: 'Grafico de desemepenho dos algoritmos de ordenação'
        },
        subtitle: {
            text: 'Source: <a href="https://www.highcharts.com/">highcharts.com</a>'
        },
        xAxis: {
            categories: ['Bubblesort', 'Insertionsort', 'Quicksort', 'Selectionsort', 'Mergesort'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'tempo(milisegundos)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' ms'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Vetor A',
            data: [bubblea, insertiona, quicka, selectiona, mergea]
        }, {
            name: 'Vetor B',
            data: [bubbleb, insertionb, quickb, selectionb, mergeb]
        }, {
            name: 'Vetor C',
            data: [bubblec, insertionc, quickc, selectionc, mergec]
        }]
    });
}