import Vue from 'vue'
import App from './App.vue'
import  firebase from 'firebase'

Vue.config.productionTip = false

 
export let firebaseConfig = {
    apiKey: "AIzaSyAuYUDAwkxgtnejiF5x2XZptIwYa2Q8REQ",
    authDomain: "sharepic-31521.firebaseapp.com",
    databaseURL: "https://sharepic-31521.firebaseio.com",
    projectId: "sharepic-31521",
    storageBucket: "sharepic-31521.appspot.com",
    messagingSenderId: "812688028416",
    appId: "1:812688028416:web:f299df02de68bdd7e6b9e5",
    measurementId: "G-03XPDDXL7V"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



new Vue({  
  render: h => h(App),
}).$mount('#app')
