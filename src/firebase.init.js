
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAUMSAsBwMv9zvHPRv0DYJowiSqVVcwYfI",
    authDomain: "hotel-room-auth-prac.firebaseapp.com",
    projectId: "hotel-room-auth-prac",
    storageBucket: "hotel-room-auth-prac.appspot.com",
    messagingSenderId: "708735391923",
    appId: "1:708735391923:web:482f6518c916fa74b3f8c6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
