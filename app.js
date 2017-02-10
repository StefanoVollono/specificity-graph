(function (){
  "use strict";

  //document.getElementById("parseit").addEventListener("click", parseCSS);
  var selectorArray = [];
  var specificityArray = [];


  var output = document.getElementById("myTextarea").value;
  output = output.replace(/\s/g, "")
  document.getElementById("myTextarea").innerHTML = output;



  //initialize parser object
  var parser = new cssjs();

  //parse css string
  var parsed = parser.parseCSS(output);
  console.log(parsed);



  for (var i=0; i< parsed.length; i++) {
    selectorArray.push(parsed[i].selector);
  }
  var selectorArrayLength = selectorArray.length;


  var string = selectorArray.join(',');




  var specificity = SPECIFICITY.calculate(string);
  //console.log(specificity)

  for (var i=0; i< specificity.length; i++) {
    specificityArray.push(specificity[i].specificity.replace(/\,/g,""));
  }




  //$('#myChart').attr('width',specificityArray.length*40);
  $('#selectors').text(specificityArray.length);
  //console.log(specificityArray)



var ctx = document.getElementById("myChart").getContext("2d");

// Chart.js
var myChart = new Chart(ctx,{
  type: 'line',
  data: {
    labels: specificityArray,
    datasets: [
      {
        label: "Specificity",
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgba(255, 172, 100, 0.1)",
        borderColor: "rgba(255, 172, 100, 1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 2,
        borderJoinStyle: 'miter',
        pointBorderColor: "#202b33",
        pointBackgroundColor: "rgba(255, 172, 100, 1)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 172, 100, 1)",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 3,
        pointRadius: 6,
        pointHitRadius: 10,
        data: specificityArray,
        spanGaps: false
      }
    ]
  },
  options: {
    responsive: false,
  }
});



// Chart.js

var ctxLight = document.getElementById("myChartLight").getContext("2d");
var myChartLight = new Chart(ctxLight,{
  type: 'line',
  data: {
    labels: specificityArray,
    datasets: [
      {
        label: "Specificity",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        borderWidth: 0.8,
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: specificityArray,
        spanGaps: false,
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }],
    }
  }
});





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
  var ctx = document.getElementById("myChartLight").getContext("2d");
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