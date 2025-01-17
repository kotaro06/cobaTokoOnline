// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase,  ref, set, child, get, update, remove, onValue, orderByChild, limitToLast} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCojZCtQ_eWGpLfoziF8jL3Oa04RrVS-q8",
  authDomain: "cobatokoonlineq.firebaseapp.com",
  databaseURL: "https://cobatokoonlineq-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cobatokoonlineq",
  storageBucket: "cobatokoonlineq.firebasestorage.app",
  messagingSenderId: "318758633324",
  appId: "1:318758633324:web:000d10f6f695ce89b0fd49",
  measurementId: "G-1V4Q1TRXTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const  dbRef = ref(database);

export { database };