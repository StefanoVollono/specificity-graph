(function (){
  "use strict";

  //document.getElementById("parseit").addEventListener("click", parseCSS);
  var selectorArray = [];
  var specificityArray = [];



  //initialize parser object
  var parser = new cssjs();

  //parse css string
  var parsed = parser.parseCSS(document.getElementById("myTextarea").value);
  //console.log(parsed);



  for (var i=0; i< parsed.length; i++) {
    selectorArray.push(parsed[i].selector);
  }
  //console.log(selectorArray);
  var string = selectorArray.join(',');

  //console.log(string);



  var specificity = SPECIFICITY.calculate(string);
  //console.log(specificity)

  for (var i=0; i< specificity.length; i++) {
    specificityArray.push(specificity[i].specificity.replace(/\,/g,""));
  }

  //console.log(specificityArray)


//To create a chart, we need to instantiate the Chart class. To do this, we need to pass in the node, jQuery instance, or 2d context of the canvas of where we want to draw the chart.
var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: specificityArray,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: 'rgba(255, 172, 100, 1)',
            borderColor: '#202b33',
            borderWidth: 1,
            data: specificityArray,
        }
    ]
};

// Chart.js
var myChart = new Chart(ctx,{
  type: 'bar',
  data: data,
  options: {
    scales: {
      xAxes: [{
        stacked: true,
        //barThickness: 5
        barPercentage: 1,
        categoryPercentage: 1
        //ticks: { beginAtZero: true, maxTicksLimit: 4 }
      }]
    },
    responsive: false
  }
});
console.log(myChart);




// Line Chart

/*

  var salesData = {
    labels: specificityArray,
    datasets: [

      {
        label: "Middle",
        fillColor: "rgba(255, 172, 100, 0.1)",
        strokeColor: "rgba(255, 172, 100, 1)",
        pointColor: "rgba(255, 172, 100, 1)",
        pointStrokeColor: "#202b33",
        pointHighlightStroke: "rgba(225,225,225,0.9)",
        data: specificityArray
      }
    ]
  };
  var ctx = document.getElementById("salesData").getContext("2d");
  window.myLineChart = new Chart(ctx).Line(salesData, {
    pointDotRadius : 6,
    pointDotStrokeWidth : 2,
    datasetStrokeWidth : 3,
    scaleShowVerticalLines: false,
    scaleGridLineWidth : 2,
    scaleShowGridLines : true,
    scaleGridLineColor : "rgba(225, 255, 255, 0.02)",
    scaleOverride: true,
    scaleSteps: 25,
    scaleStepWidth: 10,
    scaleStartValue: 0,

    responsive: false

  });

*/





}());