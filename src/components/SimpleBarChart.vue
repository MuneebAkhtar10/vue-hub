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
            name: 'Total Time',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Completed Time',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }],
        chartOptions: {
            chart: {
              type: 'bar',
              dropShadow: {
                  enabled: true,
                  top: 0,
                  left: 4,
                  blur: 3,
                  color: '#000',
                  opacity: 0.2
                },
              toolbar : {
                  show:false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 8,
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Erdington', 'Birmingham', 'Chelmsley', 'Dudley', 'DERBY']
            },
            fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#437aea'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 120]
            },
            },
            theme: { 
                palette: 'palette2'
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val
                }
              }
            },
            responsive: [{
              breakpoint: 1200,
              options: {
                plotOptions: {
                  bar: {
                    borderRadius: 4
                  }
                }
              }
            }]
          }
    }
 }
}
</script>