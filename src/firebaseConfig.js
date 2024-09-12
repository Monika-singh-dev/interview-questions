// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVILSgaaraMVGFyZSqBVk8S5iOkjPhzUk",
  authDomain: "user-auth-d2228.firebaseapp.com",
  projectId: "user-auth-d2228",
  storageBucket: "user-auth-d2228.appspot.com",
  messagingSenderId: "750584551312",
  appId: "1:750584551312:web:099ec028a575735c4c8515",
  measurementId: "G-3YR1LNRZXQ",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
// export default firebase;
// export const auth = getAuth(app);

// export const signUp = (email, password) =>
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       return user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log({
//         code: errorCode,
//         message: errorMessage,
//       });

//       return null;
//     });
// export const signIn = (email, password) =>
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       return user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log({
//         code: errorCode,
//         message: errorMessage,
//       });

//       return null;
//     });
