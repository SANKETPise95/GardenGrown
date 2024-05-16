// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFALgtEHczQW9nSODOimwh4QCt5yyY75U",
  authDomain: "project-gardengrown.firebaseapp.com",
  projectId: "project-gardengrown",
  storageBucket: "project-gardengrown.appspot.com",
  messagingSenderId: "565036780722",
  appId: "1:565036780722:web:88056641744026c36fcdab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export {auth, fireDB}