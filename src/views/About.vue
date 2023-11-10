<template>
    <div>
      <NavBar />
      <div class="about-container">
        <h2 class="about-title">About CompareCart</h2>
        <p class="about-description">
          According to Locad, Singaporeans love shopping online, just like
          anyone else in the world. Statistically, 3 in 4 Singaporeans have
          shopped online, which is quite a vast number of people. However, many
          people find it frustrating to navigate through multiple e-commerce
          websites rather than having all the information and features they need
          in one place. Through “CompareCart,” our aim is to empower online
          shoppers with a seamless and comprehensive e-commerce experience by
          providing them with a user-friendly E-commerce Wishlist Application and a
          Price Comparison Website. Through these interconnected solutions, we aim
          to simplify the process of managing desired products, comparing prices,
          and making informed purchasing decisions, ultimately enhancing
          convenience, organization, and cost-efficiency for consumers while
          delivering value to e-commerce businesses.
        </p>
      </div>
    </div>
    <div class="team-members">
    <h2>Meet Our Team</h2>
    <ul>
      <li>
        <span class="member-name">Chin Hui Min Cheryl</span>, Product Owner & Developer
      </li>
      <li>
        <span class="member-name">Amrithavarshini Satheesh</span>, SCRUM Master & Developer
      </li>
      <li>
        <span class="member-name">Aarushi Mundra</span>, Developer
      </li>
      <li>
        <span class="member-name">Justin Lum Jhun Mun</span>, Developer
      </li>
      <li>
        <span class="member-name">Wong Jia Hao Bryan</span>, Developer
      </li>
    </ul>
  </div>
</template>

<script>
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
        // console.log(this.useremail);
      }
    });
  },
}
</script>
  
  
  <style scoped>
  .about-container {
    text-align: center;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    border-color: lightsalmon ;
    box-shadow: 0 4px 8px 0 lightsalmon;
  }
  
  .about-title {
    font-size: 24px;
    color: #333;
    margin: 0 0 20px 0;
  }
  
  .about-description {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
  }
  .team-members {
  max-width: 600px; /* Adjust the width as needed */
  margin: 20px auto;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -10%);
  position: absolute;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #007BFF;
  border: 2px solid #007BFF;
}

.team-members h2 {
  font-size: 24px;
  color: #333;
  margin: 0 0 20px 0;
}

.team-members ul {
  list-style-type: none;
  padding: 0;
}

.team-members li {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}

.member-name {
  font-weight: bold;
}
  </style>
  

  