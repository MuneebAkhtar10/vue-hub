<template>
   <div>
        <apexchart type="area" height="300" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
export default {
data() {
    return {
        series: [{
            name: 'Punctuality',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'Duration',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chartOptions: {
            chart: {
              type: 'area',
              toolbar: false,
              dropShadow: {
                  enabled: true,
                  top: 10,
                  left: 6,
                  blur: 3,
                  color: '#000',
                  opacity: 0.14
                },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
            legend: {
              show: true,
              offsetY: 6
            },
            stroke: {
                width: 3
            },
            theme: {
                palette: 'palette2'
            }
          }
    }
 }
}
</script>