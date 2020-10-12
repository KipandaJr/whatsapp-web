import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDd0WXcpXyb56qB4hFyWVOJZj71pRQ8ZGY",
    authDomain: "whatsapp-ce7ee.firebaseapp.com",
    databaseURL: "https://whatsapp-ce7ee.firebaseio.com",
    projectId: "whatsapp-ce7ee",
    storageBucket: "whatsapp-ce7ee.appspot.com",
    messagingSenderId: "964727200390",
    appId: "1:964727200390:web:8fc3c41c331c2de657cf07",
    measurementId: "G-26XV7TV6RM"
};

const fire=firebase.initializeApp(firebaseConfig);

export default fire;