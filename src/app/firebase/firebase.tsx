import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getStorage } from "firebase/storage";
import ReduxSagaFirebase from 'redux-saga-firebase'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_APP_ID,
    measurementId: process.env.REACT_APP_API_MEASUREMENT_ID
});
export const reduxSagaFirebase = new ReduxSagaFirebase(app)
export const storage = getStorage(app);
export default app;