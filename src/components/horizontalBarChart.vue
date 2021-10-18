<template>
    <div>
      <apexchart type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
 data() {
    return {
        series: [{
            data: [400, 430, 448, 470, 540]
          }],
        chartOptions: {
            chart: {
              type: 'bar',
              toolbar: {
                show: false
              },
            },
            plotOptions: {
              bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                  position: 'bottom'
                },
              }
            },
            dataLabels: {
              enabled: true,
              textAnchor: 'start',
              style: {
                colors: ['#fff']
              },
              formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
              },
              offsetX: 0,
              dropShadow: {
                enabled: true
              }
            },
            stroke: {
              width: 2,
              colors: ['#fff']
            },
            theme: { 
                palette: 'palette2'
            },
            xaxis: {
              categories: ['Erdington', 'Birmingham', 'Chelmsley', 'Dudley', 'DERBY'],
            },
            yaxis: {
              labels: {
                show: false
              }
            },
            tooltip: {
              theme: 'dark',
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function () {
                    return ''
                  }
                }
              }
            }
          },
    }
 }
}
</script>