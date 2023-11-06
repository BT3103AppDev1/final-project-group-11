<!-- <template>

    <div>
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Send login request and handle authentication token
        // Store token in local storage
      }
    }
  };
  </script> -->
  <!-- <template>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <v-app>
        <NavBar />
        <div>
            <div id="logo-div">
                <v-img id="circle-logo" src="../assets/CompareCartLogo.png">
                </v-img>
            </div>
            <div id="card-pos">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card width="500" class="mx-auto mt-16 rounded-card1" elevation='5' height="520">
                                <v-row style="margin-bottom: 20px;">
                                    <v-col>
                                        <div id="welcome-title">Welcome to <span id="charge-text">CompareCart</span><br />
                                        </div>
                                        <div id="signup-title">Log In</div>
                                    </v-col>
                                </v-row>
                                <div style="height: 80px;"></div>
                                <div id="card-spacing">
                                    <v-form v-model="form" @submit.prevent="onSubmit">
                                        <v-text-field v-model="email" :rules="emailValidFormat.concat(requiredRule)"
                                            variant="underlined" label="Enter your email address" color="#4285f4">
                                        </v-text-field>
                                        <v-text-field v-model="password"
                                            :append-icon="showpw1 ? 'mdi-eye' : 'mdi-eye-off'" variant="underlined"
                                            label="Enter your password" color="#4285f4"
                                            :rules="requiredRule.concat(passwordLengthRule)"
                                            :type="showpw1 ? 'text' : 'password'" @click:append="showpw1 = !showpw1">
                                        </v-text-field>
                                        <v-row id="options-section">
                                            <v-col>
                                                <v-row>
                                                    <span id="no-account-text">Don't have an account?</span>
                                                </v-row>
                                                <v-row style="margin-top: 5px;">
                                                    <router-link :to="{ path: '../signup' }" id="sign-up-link">Sign
                                                        Up
                                                    </router-link>
                                                </v-row>
                                            </v-col>
                                            <v-col>
                                                <router-link :to="{ path: '../forgetpw' }" id="forgot-pw-link">
                                                    Forgot
                                                    Password
                                                </router-link>
                                            </v-col>
                                        </v-row>
                                        <v-btn block size="large" type="submit" variant="elevated" id="btn-sign-in">
                                            Log In
                                        </v-btn>
                                    </v-form>
                                </div>
                                <v-col>
                                    <h6 id="or">OR</h6>
                                </v-col>
                                <v-row class="center-content">
                                    <v-btn id="sign-in-google-btn-style" @click="signInWithGoogle(email, password)">
                                        <span class="">Log In with Google</span>
                                    </v-btn>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </v-app>
</template> -->

<template>
  <div class="login">
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  // component logic can go here
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
}

.form-group {
  margin: 10px 0;
}

button {
  background-color: lightsalmon;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: lightsalmon;
}
</style>
