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

    // Default Obj
    $scope.sgtConfig = {};

    // Initialize parser object
    var cssjsObj = new cssjs();

    // Entry Point scan Button
    $scope.parseCssInput = function () {

      // cssjs Object mette a disposizione un metodo per parsare il CSS
      var cssParsed = cssjsObj.parseCSS($scope.cssInput);

      // Ritorno le rules [contiene sia le direttive che gli important]
      $scope.sgtConfig.rules = getRules(cssParsed); // object

      // Ritorno i selettori
      $scope.sgtConfig.selectors = getSelectors(cssParsed);


      // Specificity Calculator is built for CSS Selectors Level 3.
      // Specificity Calculator isn’t a CSS validator.
      // If you enter invalid selectors it will return incorrect results.
      console.log($scope.sgtConfig.selectors)
      //var string = selectorArray.join(',');
      //var specificity = SPECIFICITY.calculate(string);
      //for (var i = 0; i < specificity.length; i++) {
        //specificityArray.push(specificity[i].specificity.replace(/\,/g,""));
      //}


    };


    // Funzione che ritorna i selettori
    function getSelectors (arr) {
      var rulesObj = {
        selectorsArr: [],
        selectorsTot: 0
      };

      //var selectorArray = [];

      // Per ogni indice di arr (per ogni dichiarazione presente nel foglio di stile) viene salvato il contenuto di "selector"
      // che contiene un'unica stringa con tutti i selettori separati da virgola.
      // Lo split(',') della stringa è necessario per evitare un conteggio errato nel caso avessimo selettori concatenati es: a,p{...}
      for (var i = 0; i < arr.length; i++) {
        // aggiorno l'array principale con tutti i selettori appartententi alle varie dichiarazioni
        var selectors = arr[i].selector.split(',');
        rulesObj.selectorsArr = rulesObj.selectorsArr.concat(selectors);
        rulesObj.selectorsTot = rulesObj.selectorsArr.length;
      }
      return rulesObj;
    }

    // Funzione che ritorna le proprietà
    function getRules (arr) {
      var rulesObj = {
        rulesTot: arr.length,
        directives: [],
        directivesTot: 0,
        importantTot: 0
      };

      for (var i = 0; i < arr.length; i++) {
        var properties = arr[i].rules;
        properties.forEach(function(item) {
          var dir = item.directive; // salvo in dir il valore corrente della proprietà "directive"
          var val = item.value; // salvo in val il valore corrente della proprietà "value" (che potrebbe contenere !important)

          rulesObj.directives.push(dir); // pusho il risultato nell'array
          rulesObj.directivesTot = rulesObj.directives.length;

          if (val.indexOf('!important') > 0) {
            rulesObj.importantTot ++; // incremento il valore di rulesObj.important solo se la chiave !important viene trovata
          }

        });
      }
      return rulesObj;
    }



  }


}());



/*
(function (){
  "use strict";


  //$('#myChart').attr('width',specificityArray.length*40);

 // Chart.js
  var ctx = document.getElementById("myChart").getContext("2d");


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