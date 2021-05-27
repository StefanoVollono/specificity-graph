<script>
  //Importing Line class from the vue-chartjs wrapper
  import { Bar, Line, mixins, PolarArea } from 'vue-chartjs'
  
  const { reactiveProp } = mixins;

  const CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes:[
        {
          ticks: {
              beginAtZero: true
          },
          maxBarThickness: 10,
          barThickness: 10
        }
      ],
      xAxes: [
        {
          maxBarThickness: 100,
          display: false
        }
      ]
    }
  };

  //Exporting this so it can be used in other components
  export default {
    extends: Bar,
    mixins: [reactiveProp],
    mounted () {
      this.renderChart(this.chartData, CHART_OPTIONS)
    }
  }
</script>
