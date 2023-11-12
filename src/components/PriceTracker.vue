<template>
  <div class="price-tracker">
    <h3>Price Tracker</h3>
    <canvas ref="lineChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);
export default {
  props: {
    PreviousPrices: Array,
  },
  setup(props) {
    const lineChart = ref(null);
    onMounted(() => {
      // Use Chart.js to create the line chart
      const ctx = lineChart.value.getContext("2d");
      updateChart(ctx, props.PreviousPrices);
    });
    function updateChart(ctx, prices) {
      console.log("Received prices:", prices);
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Month 1", "Month 2", "Month 3", "Month 4"],
          datasets: [
            {
              label: "Price History",
              borderColor: "rgb(75, 192, 192)",
              data: prices,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    return {
      lineChart,
    };
  },
};
</script>

<style scoped>
.price-tracker {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>