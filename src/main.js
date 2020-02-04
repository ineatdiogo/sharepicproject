import Vue from 'vue'
import App from './App.vue'

const firebase = require("firebase/app")
require('firebase/auth')
require("firebase/firestore")

Vue.config.productionTip = false
 
export const firebaseConfig = {
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
const fb = firebase.initializeApp(firebaseConfig) //fb = firebase

const db = firebase.firestore() // db = database

export {fb, db}


new Vue({
  render: h => h(App),
}).$mount('#app')
