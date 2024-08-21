
// import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
// import 'firebase/compat/storage'
// import 'firebase/compat/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyAorThdsZhKvz_l77khZc5-OjJM5yhaElg",
//   authDomain: "wizgram-6b36f.firebaseapp.com",
//   projectId: "wizgram-6b36f",
//   storageBucket: "wizgram-6b36f.appspot.com",
//   messagingSenderId: "375615700731",
//   appId: "1:375615700731:web:e686e4b30fdc8a99513a5e",
//   measurementId: "G-QJDKVJ0JPK"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const projectStorage = firebase.storage()
// const projectFirestore = firebase.firestore()

// export {projectStorage, projectFirestore}





import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAorThdsZhKvz_l77khZc5-OjJM5yhaElg",
  authDomain: "wizgram-6b36f.firebaseapp.com",
  projectId: "wizgram-6b36f",
  storageBucket: "wizgram-6b36f.appspot.com",
  messagingSenderId: "375615700731",
  appId: "1:375615700731:web:e686e4b30fdc8a99513a5e",
  measurementId: "G-QJDKVJ0JPK"
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };