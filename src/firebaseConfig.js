import * as firebase from 'firebase'

export const  firebaseConfig ={
    apiKey: "AIzaSyBjsaABe_I6H3CcUWEGSncTSi4AxaSC9qc",
    authDomain: "glamping-paihuen.firebaseapp.com",
    databaseURL: "https://glamping-paihuen.firebaseio.com",
    projectId: "glamping-paihuen",
    storageBucket: "glamping-paihuen.appspot.com",
    messagingSenderId: "495915582201",
    appId: "1:495915582201:web:84497aa661ef8fdfdbd828",
    measurementId: "G-3QJEZQN1LG"
};

firebase.initializeApp(firebaseConfig)

export const firebaseAnalytics =firebase.analytics();