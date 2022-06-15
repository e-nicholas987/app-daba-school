import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "dabaappp.firebaseapp.com",
  projectId: "dabaappp",
  storageBucket: "dabaappp.appspot.com",
  messagingSenderId: "104841329273",
  appId: "1:104841329273:web:ed2ee8b8d33b005694f2a8",
  measurementId: "G-1BMS5PM6R5",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const GOOGLE_PEOPLE_API =
  "https://www.googleapis.com/oauth2/v3/userinfo?access_token=";

export const getGoogleUserProfile = ({ accessToken }) =>
  fetch(`${GOOGLE_PEOPLE_API}${accessToken}`);

export const createUser = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

export const updateUserProfile = ({ displayName }) =>
  updateProfile(auth.currentUser, {
    displayName: displayName,
  });

export const logOut = () => signOut(auth);
