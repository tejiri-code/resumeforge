// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9knJzSXfBOCOWDy3qun2R0N6QMKZSRnU",
    authDomain: "resumeforge-108e6.firebaseapp.com",
    databaseURL: "https://resumeforge-108e6-default-rtdb.firebaseio.com",
    projectId: "resumeforge-108e6",
    storageBucket: "resumeforge-108e6.appspot.com",
    messagingSenderId: "456358069511",
    appId: "1:456358069511:web:4c49c5e3fe8d246591f1a2",
    measurementId: "G-F6BJZRBB0Q"
  };

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const createUser = createUserWithEmailAndPassword(auth);
export { auth };
export { db };
export { createUser };