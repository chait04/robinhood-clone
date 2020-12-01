import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyDuAKnlWtABhq4Aep3-hqgEuYAbMj3a-ws",
    authDomain: "robinhood-d839a.firebaseapp.com",
    databaseURL: "https://robinhood-d839a.firebaseio.com",
    projectId: "robinhood-d839a",
    storageBucket: "robinhood-d839a.appspot.com",
    messagingSenderId: "1040952886466",
    appId: "1:1040952886466:web:3a5a3485b655728663e75b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db };
