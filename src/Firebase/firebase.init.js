// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANcqMT0KqmZV6jM_2DxXih_M9AmT2HrNs",
    authDomain: "fir-auth-bbd72.firebaseapp.com",
    projectId: "fir-auth-bbd72",
    storageBucket: "fir-auth-bbd72.appspot.com",
    messagingSenderId: "391896866095",
    appId: "1:391896866095:web:d8c61cc064a8f2ae2695da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;