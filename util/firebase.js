const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDruzntT0svI-NEHyhKx_Jfqq4UiLqDBUQ",
    authDomain: "admin-portal-806dd.firebaseapp.com",
    projectId: "admin-portal-806dd",
    storageBucket: "admin-portal-806dd.appspot.com",
    messagingSenderId: "403352212694",
    appId: "1:403352212694:web:361c9650b197250b59e577",
    measurementId: "G-G7MJW9LPC6"
  };


firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app