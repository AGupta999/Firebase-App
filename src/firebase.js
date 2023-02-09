import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyA5Afms_1NOE14yKGoBSOy-oDvtEth1EPM",
  authDomain: "dentira-assignment.firebaseapp.com",
  projectId: "dentira-assignment",
  storageBucket: "dentira-assignment.appspot.com",
  messagingSenderId: "759718195025",
  appId: "1:759718195025:web:c31cb4908b8ae00d68ad70",
  measurementId: "G-14TB7J358T"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;