import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD48yzby4Avtyzsgrw0m_1w8qXao3C2r4w",
  authDomain: "fir-auth-6377b.firebaseapp.com",
  projectId: "fir-auth-6377b",
  storageBucket: "fir-auth-6377b.appspot.com",
  messagingSenderId: "726718200539",
  appId: "1:726718200539:web:94c490864d1f5696cceafe",
  measurementId: "G-V62FTNYGWJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
