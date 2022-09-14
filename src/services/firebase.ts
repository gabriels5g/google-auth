import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDrXsG4DU1McGP7IuyO2zqWDM2aXZgC9Bc",
  authDomain: "auth-ddedd.firebaseapp.com",
  projectId: "auth-ddedd",
  storageBucket: "auth-ddedd.appspot.com",
  messagingSenderId: "539713809232",
  appId: "1:539713809232:web:42c000c57ffb5acaca1a55"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)