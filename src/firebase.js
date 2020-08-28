import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAFWYRTc-rVAT5rgD6Lv3dxxycnIm7HeKc",
    authDomain: "messanger-70de8.firebaseapp.com",
    databaseURL: "https://messanger-70de8.firebaseio.com",
    projectId: "messanger-70de8",
    storageBucket: "messanger-70de8.appspot.com",
    messagingSenderId: "287840240589",
    appId: "1:287840240589:web:a5c4c787a72039b366fa84",
    measurementId: "G-D4G1X3PXCF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;