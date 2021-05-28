## The project
Is a really simple tool which allows to copy and paste your CSS and analyse the stylesheet specificity state. Any peaks of specificity can be analysed by hovering the node itself.

![spec 1](http://res.cloudinary.com/ddbdqb6js/image/upload/v1490768227/spec_1_ruwaoy.png)

## Specificity
To calculate it is easy: ideally, is made of 4 values separated by a comma (`0,0,0,0`) and every type of selector (ID, class, etc) gives a unit to the referring channel. In theory, we would have:

1. For every ID, add `0,1,0,0`.
2. For every class, pseudo-class and attribute selector add `0,0,1,0`.
3. For every element and pseudo-element, add `0,0,0,1`.
4. The specificity of a universal selector will amount to `0,0,0,0`, which is not the same thing as saying that it doesn't have any.
5. The specificity of a selector in line is equal to `1,0,0,0` (maximum value).
6. Declarations with `!important` will trump whatever on every other declaration which doesn't use the same attribute.

![spec 2](http://res.cloudinary.com/ddbdqb6js/image/upload/v1490768227/spec_2_a8uon2.png)

## Avoid the peaks
The idea behind this comes from the need to keep under control the specificity level of our projects. A low level or, better, constant and linear level of the graphic, means having projects easy to maintain and scalable over time.

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