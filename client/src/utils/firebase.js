import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// import dotenv from 'dotenv';
// dotenv.config();

const FIREBASE_KEY=import.meta.env.FIREBASE_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "nivesha-759e3.firebaseapp.com",
  projectId: "nivesha-759e3",
  storageBucket: "nivesha-759e3.appspot.com",
  messagingSenderId: "291498316793",
  appId: "1:291498316793:web:d9fb01babfca36cd0ca328",
  measurementId: "G-8ERV1SC9CY"
};

// Initialize Firebase
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 


  const storage = firebase.storage()


  export  {
    storage, firebase as default
  }