<!-- <template>
  <div class="search-page">
    <BackButton />
    <CompareCart />
    <HomeButton />
    <LogOutButton />
    <div class="pink-box"></div>
  </div>
</template>
<script>
import BackButton from "../components/BackButton.vue";
import CompareCart from "../components/CompareCart.vue";
import HomeButton from "../components/HomeButton.vue";
import LogoutButton from "../components/LogoutButton.vue";
import Header from "../components/HeaderTitle.vue";
import DropDown from "../components/DropDown.vue";
import Product from "../components/Product.vue";
import { defineComponent } from "vue";
import firebaseApp from "../firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "SearchPage",
  components: {
    BackButton,
    CompareCart,
    HomeButton,
    LogoutButton,
    Product,
    DropDown,
  },
  data() {
    return {
      user: false,
      useremail: "",
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.useremail = user.useremail;
      }
    });
  },
};
</script>

<style scoped>
h1 {
  display: inline-block;
}
.pink-box {
  width: 1250px;
  height: 500px;
  background: rgba(255, 192, 203, 0.769);
  display: inline-block;
  overflow-y: scroll;
}
</style> -->
<!-- <template>
  <div class="price-tracker">
    <h2>Price History Chart</h2>
    <canvas ref="lineChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  extends: Line,
  props: {
    productId: String, // Product ID to fetch data from Firebase
  },
  data() {
    return {
      chartData: {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
        datasets: [
          {
            label: 'Price History',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: [
            {
              grid: {
                display: false,
              },
            },
          ],
          y: [
            {
              grid: {
                color: 'lightgray',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  async mounted() {
    // Fetch the product's data from Firebase using the provided productId
    const db = getFirestore();
    const productDocRef = doc(db, 'products', this.productId);

    try {
      const productSnapshot = await getDoc(productDocRef);
      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        this.chartData.datasets[0].data = productData.previousprices;
        this.renderChart(this.chartData, this.chartOptions);
      } else {
        console.error('Product not found');
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  },
};
</script> -->

  