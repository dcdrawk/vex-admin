<template>
  <div class="row page-content">

    <v-card title="Charts" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <div class="row">
            <!-- Line Chart -->
            <div class="col-xs-6">
              <h3 class="title">Line Chart</h3>
              <v-chart type="line" :datasets="lineChartDatasets" :labels="monthLabels" :options="lineOptions"></v-chart>
            </div>

            <!-- Scatter Chart -->
            <div class="col-xs-6">
              <h3 class="title">Scatter Chart</h3>
              <v-chart type="line" :datasets="scatterDatasets" :options="scatterOptions"></v-chart>
            </div>

            <!-- Bar Chart -->
            <div class="col-xs-6">
              <h3 class="title">Bar Chart</h3>
              <v-chart type="bar" :datasets="barDataset" :labels="monthLabels" :options="barOptions"></v-chart>
            </div>

            <!-- Horizontal Bar Chart -->
            <div class="col-xs-6">
              <h3 class="title">Horizontal Bar Chart</h3>
              <v-chart type="horizontalBar" :datasets="barDataset" :labels="monthLabels" :options="barOptions"></v-chart>
            </div>

            <!-- Radar Chart -->
            <div class="col-xs-6">
              <h3 class="title">Radar Chart</h3>
              <v-chart type="radar" :datasets="radarDatasets" :labels="radarLabels"></v-chart>
            </div>

            <!-- Polar Area Chart -->
            <div class="col-xs-6">
              <h3 class="title">Polar Area Chart</h3>
              <v-chart type="polarArea" :datasets="polarAreaDatasets" :labels="polarAreaLabels"></v-chart>
            </div>

            <!-- Pie Chart -->
            <div class="col-xs-6">
              <h3 class="title">Pie Chart</h3>
              <v-chart type="pie" :datasets="pieDatasets" :labels="pieLabels"></v-chart>
            </div>

            <!-- Doughnut Chart -->
            <div class="col-xs-6">
              <h3 class="title">Doughnut Chart</h3>
              <v-chart type="doughnut" :datasets="pieDatasets" :labels="pieLabels"></v-chart>
            </div>
          </div>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ chartMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ chartScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VChart from '../vex/Chart.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';
  // Exports
  export default {

    // Components
    components: {
      VCard,
      VButton,
      VChart,
      VTabs
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },

    // Data
    data () {
      return {
        monthLabels: ["January", "February", "March", "April", "May", "June", "July"],
        lineChartDatasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          }
        ],

        lineOptions: {
//          animation: false
        },

        scatterDatasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }]
        }],

        scatterOptions: {
//          animation: false,
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          }
        },

        barDataset: [{
          label: "My First dataset",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40],
        }],

        barOptions: {
//          animation: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
          }
        },

        radarLabels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        radarDatasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ],

        polarAreaDatasets: [{
          data: [
            11,
            16,
            7,
            3,
            14
          ],
          backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
          ],
          label: 'My dataset' // for legend
        }],

        polarAreaLabels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Blue"
        ],

        pieLabels: [
          "Red",
          "Blue",
          "Yellow"
        ],

        pieDatasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }],

        chartMarkup: `<div class="row">
  <!-- Line Chart -->
  <div class="col-xs-6">
    <h3 class="title">Line Chart</h3>
    <v-chart type="line" :datasets="lineChartDatasets" :labels="monthLabels" :options="lineOptions"></v-chart>
  </div>

  <!-- Scatter Chart -->
  <div class="col-xs-6">
    <h3 class="title">Scatter Chart</h3>
    <v-chart type="line" :datasets="scatterDatasets" :options="scatterOptions"></v-chart>
  </div>

  <!-- Bar Chart -->
  <div class="col-xs-6">
    <h3 class="title">Bar Chart</h3>
    <v-chart type="bar" :datasets="barDataset" :labels="monthLabels" :options="barOptions"></v-chart>
  </div>

  <!-- Horizontal Bar Chart -->
  <div class="col-xs-6">
    <h3 class="title">Horizontal Bar Chart</h3>
    <v-chart type="horizontalBar" :datasets="barDataset" :labels="monthLabels" :options="barOptions"></v-chart>
  </div>

  <!-- Radar Chart -->
  <div class="col-xs-6">
    <h3 class="title">Radar Chart</h3>
    <v-chart type="radar" :datasets="radarDatasets" :labels="radarLabels"></v-chart>
  </div>

  <!-- Polar Area Chart -->
  <div class="col-xs-6">
    <h3 class="title">Polar Area Chart</h3>
    <v-chart type="polarArea" :datasets="polarAreaDatasets" :labels="polarAreaLabels"></v-chart>
  </div>

  <!-- Pie Chart -->
  <div class="col-xs-6">
    <h3 class="title">Pie Chart</h3>
    <v-chart type="pie" :datasets="pieDatasets" :labels="pieLabels"></v-chart>
  </div>

  <!-- Doughnut Chart -->
  <div class="col-xs-6">
    <h3 class="title">Doughnut Chart</h3>
    <v-chart type="doughnut" :datasets="pieDatasets" :labels="pieLabels"></v-chart>
  </div>
</div>`,
        chartScript: `
import VChart from '../vex/Chart.vue';

export default {
  // Data
  data () {
    return {
      monthLabels: ["January", "February", "March", "April", "May", "June", "July"],
      lineChartDatasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        }
      ],

      scatterDatasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }]
      }],

      scatterOptions: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      },

      barDataset: [{
        label: "My First dataset",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      }],

      barOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
        }
      },

      radarLabels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      radarDatasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ],

      polarAreaDatasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset' // for legend
      }],

      polarAreaLabels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
      ],

      pieLabels: [
        "Red",
        "Blue",
        "Yellow"
      ],

      pieDatasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
    }
  }
}
`
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //Import or add any styles here
</style>
