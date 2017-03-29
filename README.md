## Il progetto
Questo è un tool molto semplice che consente di copiare e incollare il proprio CSS e analizzare l'andamento di specificità del foglio di stile. Eventuali picchi di specificità potranno essere analizzati andando direttamente con il cursore in corrispondenza del nodo incriminato. 

![spec 1](http://res.cloudinary.com/ddbdqb6js/image/upload/v1490768227/spec_1_ruwaoy.png)

## La specificità
Calcolarla è facile, essa è composta idealmente da 4 valori separati da virgola (0,0,0,0) e ogni tipologia di selettore (ID, classe, …) attribuisce un unità al canale di riferimento. Dal punto di vista puramente teorico avremo che:

1. Per ogni ID, si aggiunge 0,1,0,0
2. Per ogni classe, pseudo-classe e selettore di attributo si aggiunge un 0,0,1,0
3. Per ogni elemento e pseudo-elemento, si aggiunge un 0,0,0,1
4. La specificità del selettore universale sarà pari a 0,0,0,0 che è diverso dal dire che non ne ha.
5. La specificità del selettore in linea è pari a 1,0,0,0 (il massimo).
6. Le dichiarazioni a cui è stato abbinato !important prevaranno a prescindere su tutte le restanti dichiarazioni che non posseggono questo attributo.

![spec 2](http://res.cloudinary.com/ddbdqb6js/image/upload/v1490768227/spec_2_a8uon2.png)

## Evita i picchi
L'idea che sta alla base di questo progetto nasce dall'esigenza di tenere sotto controllo il livello di specificità dei nostri progetti. Un livello basso o meglio, un livello costante e lineare del grafico, equivale ad avere in linea di massima progetti manutenibili e scalabili nel tempo. 

![spec 3](http://res.cloudinary.com/ddbdqb6js/image/upload/v1490768229/spec_3_q4tbwy.png)

## The Specificity Graph Tool is fully based on open source projects:

### Admin & Dashboard Templates inspiration
[https://colorlib.com/wp/free-html5-admin-dashboard-templates/](https://colorlib.com/wp/free-html5-admin-dashboard-templates/)

### Parsing file css:
A lightweight, battle tested, fast, css parser in JavaScript
[https://github.com/jotform/css.js](https://github.com/jotform/css.js)

### Specificity Calculator:
A JavaScript module for calculating and comparing the specificity of CSS selectors. The module is used on the Specificity Calculator website.
[https://github.com/keeganstreet/specificity](https://github.com/keeganstreet/specificity)

### HTML5 Chart
Simple HTML5 Charts using the <canvas>
[https://github.com/chartjs/Chart.js](https://github.com/chartjs/Chart.js)

### Angular Chart
Reactive, responsive, beautiful charts for AngularJS using Chart.js
[https://github.com/jtblin/angular-chart.js](https://github.com/jtblin/angular-chart.js)

### Other libs
Angular, jQuery, Bootstrap Grid
