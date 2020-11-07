import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAHiullQRG65vH7BbyKNZKYEiqiIbQT0w",
  authDomain: "tiktok-clone-2c4fc.firebaseapp.com",
  databaseURL: "https://tiktok-clone-2c4fc.firebaseio.com",
  projectId: "tiktok-clone-2c4fc",
  storageBucket: "tiktok-clone-2c4fc.appspot.com",
  messagingSenderId: "591805060316",
  appId: "1:591805060316:web:f1a4147024cfef4aba9019",
  measurementId: "G-30SPC1FKGC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
