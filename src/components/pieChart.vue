<template>
  <div>
    <apexchart :height="300" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>

export default {
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        labels: ['Dudley', 'Erdington', 'DERBY', 'Birmingham', 'Chelmsley'],
        chart: {
          type: 'donut',
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center'
        },
        plotOptions: {
          pie: {
            customScale: 0.9,
            expandOnClick: false,
            donut: {
              size: '74%',
              labels: {
                  show:true,
                  name: {
                    show: true,
                    fontSize: '24px',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    color: "#3b3f5c"
                  },
                value: {
                  show: true,
                  fontSize: '24px',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  color: "#5e87ec"
                },
                 total: {
                    show: true,
                    showAlways: false,
                    label: 'Total',
                    fontSize: '24px',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    color: '#373d3f',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                    }
                  }
              }
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        theme: { 
            palette: 'palette2'
        }
      }
    }
  }
};
</script>
