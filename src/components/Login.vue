<template>
    <div style="text-align:center;">
        <div id= "firebaseui-auth-container"></div>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
console.log("in Login.vue")

export default {
    name:"Login",
    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        var uiConfig = {
            signInSuccessUrl: '/SearchPage',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
        };
        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>

<style scoped>
#firebaseui-auth-container{
    position: absolute;
    left: 8%;
    margin-top: 50px;;
    margin-bottom: 50px;;
}

</style>
