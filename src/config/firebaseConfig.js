import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/messaging'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAjZ4_Jwpr_Q_0UYm6OPjlVNtw-g_BkzZE",
    authDomain: "raboo-chat.firebaseapp.com",
    databaseURL: "https://raboo-chat.firebaseio.com",
    projectId: "raboo-chat",
    storageBucket: "raboo-chat.appspot.com",
    messagingSenderId: "967460356619"
};

firebase.initializeApp(config);
firebase.firestore();


export default firebase;