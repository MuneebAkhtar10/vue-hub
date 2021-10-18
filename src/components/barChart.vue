<template>
    <div>
      <apexchart type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
 data() {
    return {
        series: [
          {
            name: 'Comp. By Carer',
            data: [23, 23, 20, 28, 13]
          },
          {
            name: 'Comp. By Office',
            data: [26, 17, 15, 15, 21]
          },
          {
            name: 'In progress',
            data: [21, 7, 25, 13, 22]
          },
          {
            name: 'pending',
            data: [31, 20, 19, 24, 21]
          },
          {
            name: 'Cancelled',
            data: [31, 20, 19, 24, 21]
          },
          {
            name: 'Total Visits',
            data: [54, 45, 60, 80, 40]
          }
          ],
        chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false
              },
              dropShadow: {
                enabled: true,
                top: 0,
                left: 4,
                blur: 6,
                opacity: 0.11
              }
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: false,
              },
            },
            xaxis: {
              categories: ['Dudley', 'Erdington', 'Derby', 'Birmingham', 'Chelmsley'],
            },
            legend: {
              show: false
            },
            theme: { 
                palette: 'palette2'
            }
          },
    }
 }
}
</script>