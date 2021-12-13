import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAImeE3NwQqVqP0ub9juddUcjmpSfy36gU",
    authDomain: "fir-react-upload-fb2fe.firebaseapp.com",
    projectId: "fir-react-upload-fb2fe",
    storageBucket: "fir-react-upload-fb2fe.appspot.com",
    messagingSenderId: "610123737468",
    appId: "1:610123737468:web:875e84e0bbcc1527a55cf9",
    measurementId: "G-9BL4G4Z1ND"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics();

const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth };
export default firebase;