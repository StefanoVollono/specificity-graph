(function (){
  //"use strict";

  // define angular app
  angular
    .module('sgt',["chart.js"])
    .config(['ChartJsProvider', function (ChartJsProvider) {
      // Configure all charts
      ChartJsProvider.setOptions({
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{display: false}]
        }
      });
    }])
    .controller('MainDashboard', MainDashboard);


  // Safe minify
  MainDashboard.$inject = ['$scope', '$timeout'];

  // Main dashboard controller function
  function MainDashboard ($scope, $timeout) {

    $scope.entryPointClick = false;

    // Default Obj & setting to 0 all values
    $scope.sgtConfig = {
      rules: {
        rulesTot: 0,
        directivesTot: 0,
        importantTot: 0
      },
      selectors: {
        selectorsArr: [],
        selectorsTot: 0
      },
      chart: {
        height: 0,
        width: 0
      }
    };

    // Initialize parser object
    var cssjsObj = new cssjs();

    // Entry Point scan Button
    $scope.parseCssInput = function () {

      // Posso mostrare i grafici
      $scope.entryPointClick = true;

      // cssjs Object mette a disposizione un metodo per parsare il CSS
      var cssParsed = cssjsObj.parseCSS($scope.cssInput);

      // Ritorno le rules [contiene sia le direttive che gli important]
      $scope.sgtConfig.rules = getRules(cssParsed); // object

      // Ritorno i selettori
      $scope.sgtConfig.selectors = getSelectors(cssParsed);

      // Specificity Calculator is built for CSS Selectors Level 3.
      // Specificity Calculator isn’t a CSS validator.
      // If you enter invalid selectors it will return incorrect results.
      $scope.sgtConfig.specificityArr = getSpecificity($scope.sgtConfig.selectors.selectorsArr);

      // Ritorno i selettori
      $scope.sgtConfig.selectors = getSelectors(cssParsed);

      // Graph configuration
      $scope.sgtConfig.chart = graphConfig($scope.sgtConfig.selectors.selectorsTot);


      /* Graph configuration
      $scope.sgtConfig.chart = {
        height: 585,
        width: $scope.sgtConfig.selectors.selectorsTot * 40 // tra ogni punto ci sono 40px
      };
      */

      $scope.datasetOverride = [
        {
          borderDashOffset: 2,
          pointBorderWidth: 2,
          pointRadius: 6,
          lineTension: 0.3,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 3
        }
      ];

      $scope.colors = [
        {
          backgroundColor: "rgba(255, 172, 100, 0.1)",
          pointBackgroundColor: "rgba(255, 172, 100, 1)",
          pointHoverBackgroundColor: "rgba(255, 172, 100, 1)",
          borderColor: "rgba(255, 172, 100, 1)",
          pointBorderColor: '#202b33',
          pointHoverBorderColor: "#ffffff"
        }
      ];
      $scope.labels = $scope.sgtConfig.selectors.selectorsArr;
      $scope.series = ['Specificity'];
      $scope.data = [$scope.sgtConfig.specificityArr];

    };




    // Funzione per il calcolo della specificità
    function getSpecificity (arr) {

      // Converto l'array in una stringa
      var selectorString = arr.join(',');

      // Uso la libreria SPECIFICITY per calcolare la specificità dei singoli selettori
      var spec = SPECIFICITY.calculate(selectorString);
      var specValues = [];
      for (var i = 0; i < spec.length; i++) {
        specValues.push(spec[i].specificity.replace(/\,/g,""));
      }

      return specValues;

    }

    // Funzione che ritorna i selettori
    function getSelectors (arr) {
      var rulesObj = {
        selectorsArr: [],
        selectorsTot: 0
      };

      // Per ogni indice di arr (per ogni dichiarazione presente nel foglio di stile) viene salvato il contenuto di "selector"
      // che contiene un'unica stringa con tutti i selettori separati da virgola.
      // Lo split(',') della stringa è necessario per evitare un conteggio errato nel caso avessimo selettori concatenati es: a,p{...}
      for (var i = 0; i < arr.length; i++) {
        // aggiorno l'array principale con tutti i selettori appartententi alle varie dichiarazioni if rules è presente
        if (arr[i].hasOwnProperty('rules')) {
          var selectors = arr[i].selector.split(',');
          rulesObj.selectorsArr = rulesObj.selectorsArr.concat(selectors);
          rulesObj.selectorsTot = rulesObj.selectorsArr.length;
        }
      }
      return rulesObj;
    }

    // Funzione che ritorna le proprietà
    function getRules (arr) {
      var properties = [];
      var rulesObj = {
        rulesTot: 0,
        directives: [],
        directivesTot: 0,
        importantTot: 0
      };

      for (var i = 0; i < arr.length; i++) {
      
        // Filtro l'array che non hanno "rules"
        if (arr[i].hasOwnProperty('rules')) {
          
          // incremento il valore di rulesObj.v solo se la proprietà "rules" viene trovata
          rulesObj.rulesTot ++; 

          // Salvo l'array con tutte le properties/values
          properties = arr[i].rules;

          properties.forEach(function(item) {
            var dir = item.directive; // salvo in dir il valore corrente della proprietà "directive"
            var val = item.value; // salvo in val il valore corrente della proprietà "value" (che potrebbe contenere !important)

            rulesObj.directives.push(dir); // pusho il risultato nell'array
            

            if (val.indexOf('!important') > 0) {
              rulesObj.importantTot ++; // incremento il valore di rulesObj.important solo se la chiave !important viene trovata
            }
            
          });
        }
      }
      rulesObj.directivesTot = rulesObj.directives.length;
      return rulesObj;
    }

    // Funzione per la gestione della larghezza del grafico
    function graphConfig(items) {
      var maxWidth = 8000; // todo controllare max width raggiungibile
      var itemsLength = items; // numero di selettori
      var step = 40; // spazio tra un puntino e un altro
      var fakeWidth = itemsLength * step; // la larghezza che il grafico avrebbe senza ulteriori controlli
      var parentWidth = $('.graph--big').width();

      var chart = {}; // Object chart configuration
      chart.height = 585; // todo renderlo dinamico (div padre)
      
      if(fakeWidth < parentWidth) {
        // Se la larghezza del grafico è minore della largezza del div che lo contiene -> renderlo largo quanto il div. 
        chart.width = parentWidth; 
      } else if (fakeWidth > maxWidth) {
        // Se la larghezza è maggiore di 8000 (controllare) -> renderlo = 8000.
        chart.width = maxWidth; 
      } else {
        chart.width = fakeWidth; 
      }
    
      return chart;
    }


  }


}());


















/*

$('#myChart').attr('width',specificityArray.length*40);



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

*/