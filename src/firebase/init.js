import firebase from "firebase/app";
import firestore from "firebase/firestore";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4d5vBiwmZVoXkgeJQfTpRBA_s3cQpL9E",
  authDomain: "vue-smoothies-ec2cc.firebaseapp.com",
  databaseURL: "https://vue-smoothies-ec2cc.firebaseio.com",
  projectId: "vue-smoothies-ec2cc",
  storageBucket: "vue-smoothies-ec2cc.appspot.com",
  messagingSenderId: "418025149636",
  appId: "1:418025149636:web:0b1efbfc0e5baaab9de591",
  measurementId: "G-XS5VJH5NQS",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
