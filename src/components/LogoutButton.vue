<template>
<button id = "btn" @click = "signOut()"> Logout </button>
</template>

<script>
export default {
  methods: {
    signOut() {
      // can use router.push('/home')
    },
  },
};
/*
import { getAuth, onAuthStateChanged, signout } from "firebase/auth";

export default {
  name: 'Logout',

  data() {
    return {
      user:false,
    }
  },1

  mounted() {
    const auth = getAuth();
    onAuthStateChanged (auth, (user) => {
    if (user) {
      this.user = user;
    }
    })
  },

  methods: {
    signOut() {
      const auth = getAuth();
      const user = auth.currentUser;
      signOut (auth, user)
      this.$router.push({name:'Login'})
    }
  }
}
*/
</script>



<style scoped>
#btn{
  position: absolute;
  width: 5vw;
  height: 4vh;
  font-size: 1vw;
  top: 14.5%;
  right: 2.5%;
  text-align: center; 
  margin: auto;
}

#btn:hover{
  color: rgb(243, 236, 236);
  background-color: rgb(255, 94, 0); 
  box-shadow: 3px 3px ☐ grey
}
</style>