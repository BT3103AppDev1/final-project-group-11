<template>
  <div class="price-tracker">
    <h3>Price Tracker</h3>
    <div v-if="user">
      <canvas ref="lineChart" width="400" height="200"></canvas>
    </div>
    <div v-else>
      <p class="error-message">Sign in to view price history.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      user: false,
      useremail: "",
    };
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.useremail = user.email;
      }
    });
  },
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
.error-message {
  color: red;
  border: 1px solid red;
  padding: 10px;
  border-radius: 5px;
}
</style>
