import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase, { initializeApp }  from 'firebase/app';
import 'firebase/database'; // Make sure to import the necessary Firebase modules
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCpht8_ief6iINWtZtpyWT0EwukPip-V8",
  authDomain: "pomeroo-hwx.firebaseapp.com",
  databaseURL: "https://pomeroo-hwx-default-rtdb.firebaseio.com",
  projectId: "pomeroo-hwx",
  storageBucket: "pomeroo-hwx.appspot.com",
  messagingSenderId: "28685863084",
  appId: "1:28685863084:web:4c55a1a2c4d468b7fef709",
  measurementId: "G-EYWN51HRKK"
};

// firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
