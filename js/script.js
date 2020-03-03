
/*
var COLOR_GRIDLINES = '#CCCCCC';
var COLOR_FONT      = '#CCCCCC';*/
var COLOR_GRIDLINES = '#FFFFFF';
var COLOR_FONT      = '#FFFFFF';
var TITLE_FONTSIZE  = 20;
var LEGEND_FONTSIZE = 16;

function plot() {

    hours = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]

    /* Plot acceleration chart */
    var ctx = document.getElementById("accelerationChart");

    data = {
        labels: hours,
        datasets: [{ 
            data: [0,400,30,0,0.01,0,0,0.03,0.05,0.2],
            label: "Acceleration",
            borderColor: "#3e95cd",
            fill: false
            },
        ]
    };

    plotLineChart(ctx, data, 'Acceleration', 'Hours', 'Acceleration (km/h^2)');

    /* Plot speed chart */
    var ctx = document.getElementById("speedChart");

    data = {
        labels: hours,
        datasets: [{ 
            data: [0, 28900, 28100, 28200, 28300, 28800, 29940, 29900, 29920, 29900, 28910],
            label: "Speed",
            borderColor: "green",
            fill: false
            },
        ]
    };

    plotLineChart(ctx, data, 'Speed', 'Hours', 'Speed (km/h)');

    /* Plot distance chart */
    var ctx = document.getElementById("distanceChart");

    data = {
        labels: hours,
        datasets: [{ 
            data: [0,2800000,8400000,14000000,19600000,25200000,30800000,36400000,42000000,47600000,53200000],
            label: "Distance Traveled",
            borderColor: "orange",
            fill: false
            },
        ]
    };

    plotLineChart(ctx, data, 'Distance Traveled', 'Hours', 'Distance (km)');

    /* Plot gravity chart */
    var ctx = document.getElementById("gravityChart");

    data = {
        labels: hours,
        datasets: [{ 
            data: [9.81, 1, 1.5, 1.2, 1.3, 1.4, 1.2, 1.1, 1.05, 1.15, 1.12],
            label: "Gravity",
            borderColor: "cyan",
            fill: false
            },
        ]
    };

    plotLineChart(ctx, data, 'Gravity', 'Hours', 'Gravity (m/s2)');

    /* Plot food chart */
    var ctx = document.getElementById("foodChart").getContext('2d');

    data = { 
        labels: ["Water","Rice","Noodles"],
        datasets: [{
            label: 'Available',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            data: [1000, 650, 400],
        }, {
            label: 'Unavailable',
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            data: [500, 350, 300],
        }],
    };

    plotStackedBarChart(ctx, data, 'Water \& Food supplies', 'Supply (kg)');

    /* Plot fuel */ 
    var ctx = document.getElementById("fuelChart");

    data = {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['rgba(255,99,132,0.2)','rgba(255,99,132,0)'],
            borderColor: ['rgba(255,99,132,1)','rgba(255,99,132,1)'],
        }],
        labels: [
            'Available',
            'Consumed',
        ]
    };

    plotDoughnut(ctx, data, 'Fuel');

}

function plotDoughnut(ctx, data, title) {

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            legend: { 
                display: true,
                labels : {
                    fontColor: COLOR_FONT,
                    fontSize : LEGEND_FONTSIZE,
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            title: {
                fontColor: COLOR_FONT,
                fontSize: TITLE_FONTSIZE,
                display: true,
                text: title,
            }
        }
    });

}

function plotStackedBarChart(ctx, data, title, ylabel) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data, 
        options: {
            tooltips: {
              displayColors: true,
              callbacks:{
                mode: 'x',
              },
            },
            scales: {
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontSize:  LEGEND_FONTSIZE,
                  fontColor: COLOR_FONT,
                },
              }],
              yAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: COLOR_GRIDLINES,
                },
                ticks: {
                  fontSize:  LEGEND_FONTSIZE,
                  beginAtZero: true,
                  fontColor: COLOR_FONT,
                },
                type: 'linear',
                scaleLabel : {
                    labelString: ylabel,
                    fontSize:  LEGEND_FONTSIZE,
                    fontColor: COLOR_FONT,
                    display: true,
                },
              }]
            },
            responsive: true,
            maintainAspectRatio: false,
            /*legend: { position: 'bottom' },*/
            legend: { display: false },
            title: {
                display: true,
                fontSize: TITLE_FONTSIZE,
                fontColor: COLOR_FONT,
                text: title,
            }
        }
    });

}

function plotLineChart(ctx, data, title, xlabel, ylabel) {

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            legend: { display: false },
            title: {
                display: true,
                fontSize: TITLE_FONTSIZE,
                fontColor: COLOR_FONT,
                text: title,
            },
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontSize:  LEGEND_FONTSIZE,
                        beginAtZero: true,
                        fontColor: COLOR_FONT,
                    },
                    scaleLabel : {
                        labelString: xlabel,
                        fontSize:  LEGEND_FONTSIZE,
                        fontColor: COLOR_FONT,
                        display: true,
                    },
                }],
                yAxes: [{
                    gridLines: {
                      display: true,
                      color: COLOR_GRIDLINES,
                    },
                    ticks: {
                        fontSize:  LEGEND_FONTSIZE,
                        beginAtZero: true,
                        fontColor: COLOR_FONT,
                    },
                    type: 'linear',
                    scaleLabel : {
                        labelString: ylabel,
                        fontSize:  LEGEND_FONTSIZE,
                        fontColor: COLOR_FONT,
                        display: true,
                    },
                }]
            },
        },
    });
}
