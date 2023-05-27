import {initializeApp} from "firebase/app"
import {collection, getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BOCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_ID,
}
const app =  initializeApp(firebaseConfig) //eslint-disable-line
export const db = getFirestore()
export const colRef = collection(db, "posts")
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
