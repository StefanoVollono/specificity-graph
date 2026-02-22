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
            crossAlign: "far",
            beginAtZero: true
          },
        }
      ],
      xAxes: [
        {
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
