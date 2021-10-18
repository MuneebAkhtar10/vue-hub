<template>
    <div>
      <apexchart type="line" :height="85" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
 data() {
    return {
        series: [{
              name: "Total Branches",
              data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
          }],
        chartOptions: {
            chart: {
              type: 'line',
              toolbar: {
                show: false
              },
              dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 2,
                    blur: 2,
                    color: '#437aea',
                    opacity: 0.3
                }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
              },
            },
            xaxis: {
              floating: true,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
            },
            yaxis: {
                floating: true,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                },
            },
            grid: {
                show:false
            }
          },
    }
 }
}
</script>