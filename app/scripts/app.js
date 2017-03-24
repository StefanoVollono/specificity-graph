(function (){
  "use strict";

  // define angular app
  angular
    .module('sgt',[])
    .controller('MainDashboard', MainDashboard);

  // Safe minify
  MainDashboard.$inject = ['$scope'];

  // Main dashboard controller function
  function MainDashboard ($scope) {

    // Declare some variables
    var selectorArray = [];
    var specificityArray = [];
    $scope.totalSelector = 0;

    // Initialize parser object
    var cssjsObj = new cssjs();

    // Entry Point scan Button
    $scope.parseCssInput = function () {

      // cssjs Object mette a disposizione un metodo per parsare il CSS
      var cssParsed = cssjsObj.parseCSS($scope.cssInput);

      // Salvo il numero di selettori
      $scope.totalSelector = selectorNumberCalc(cssParsed);
    };

    // Funzione che calcola il numero di selettori
    function selectorNumberCalc (arr) {
      var selectorArray = [];

      // Per ogni indice di arr (per ogni dichiarazione presente nel foglio di stile) viene salvato il contenuto di "selector"
      // che contiene un'unica stringa con tutti i selettori separati da virgola.
      // Lo split(',') della stringa è necessario per evitare un conteggio errato nel caso avessimo selettori concatenati es: a,p{...}
      for (var i = 0; i < arr.length; i++) {
        // aggiorno l'array principale con tutti i selettori appartententi alle varie dichiarazioni
        var selectors = arr[i].selector.split(',');
        selectorArray = selectorArray.concat(selectors);
      }
      return selectorArray.length;
    }

  }


}());



/*
(function (){
  "use strict";



 //var string = selectorArray.join(',');





  var specificity = SPECIFICITY.calculate(string);
  for (var i=0; i< specificity.length; i++) {
    specificityArray.push(specificity[i].specificity.replace(/\,/g,""));
  }




  //$('#myChart').attr('width',specificityArray.length*40);
  $('#selectors').text(specificityArray.length);



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











}());
*/