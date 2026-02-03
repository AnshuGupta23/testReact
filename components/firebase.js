import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgz18YjWKZKsWMluIA-uNZseBE70MqgdU",
  authDomain: "testreact-babd0.firebaseapp.com",
  projectId: "testreact-babd0",
  storageBucket: "testreact-babd0.firebasestorage.app",
  messagingSenderId: "1007299655315",
  appId: "1:1007299655315:web:b67f0e3453e14543bf3f66",
  measurementId: "G-VTQ66MEKFY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
