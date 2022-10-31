import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD45yMlJ-f8mRETnqZqDSfwUtLSOhHQP1U",
    authDomain: "twitter-ea525.firebaseapp.com",
    databaseURL: "https://twitter-ea525-default-rtdb.firebaseio.com",
    projectId: "twitter-ea525",
    storageBucket: "twitter-ea525.appspot.com",
    messagingSenderId: "293226865434",
    appId: "1:293226865434:web:72642c7c8d519c5f1342a3"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;