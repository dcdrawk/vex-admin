<template>
  <div class="v-chart">
    <canvas id="myChart" height="400" width="500" ref="canvas"></canvas>
  </div>
</template>

<style lang="scss">
  /*@import '../../styles/components/_card';*/
  canvas {
    /*width: 100%;*/
  }
</style>

<script>
  import chartjs from 'chart.js';

  export default{
    props: [
      'height',
      'type',
      'labels',
      'datasets',
      'options'
    ],

    data () {
      return {
        chartData: {},
        testData: this.datasets || {},
        chartInstance: {}
      }
    },

    mounted () {
      setTimeout(() => {
        this.$refs.canvas.width = this.$el.clientWidth;
        this.$refs.canvas.height = this.height || '400';

        if (this.labels) {
          this.chartData = {
            labels: this.labels,
            datasets: this.datasets
          };
        } else {
          this.chartData = {
            datasets: this.datasets
          };
        }

        var ctx = this.$refs.canvas;
        this.chartInstance = new chartjs.Chart(ctx, {
          type: this.type || 'bar',
          data: this.chartData,
          options: this.options
        });
      }, 0);
    },

    watch: {
      'datasets': {
        handler: function(val, oldVal) {
          this.chartInstance.data.datasets = JSON.parse(JSON.stringify(val));
          this.chartInstance.update();
        },
      }
    }
  }
</script>
