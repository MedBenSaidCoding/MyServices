import { AuthCredential,
getAuth,
signInWithEmailAndPassword,
signOut,getIdToken,
onAuthStateChanged,
updateProfile } from 'firebase/auth';

import { doc, getDoc,getFirestore,collection } from "firebase/firestore"; 
import app from "../../../firebase/firebase";
import {UserModel} from '../../../modules/auth'
import useGetConnectedUserFromFirebase from '../hooks/useGetConnectedUserFromFirebase';

const auth = getAuth(app);
const db = getFirestore(app);
const userCollection = collection(db,"users");

export async function buildUserModelFromAuth() {
    
    const currentUser = app.auth().currentUser;


    if(auth.currentUser)
    {
        const docRef= doc(db,"users",auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
        {
            console.log(docSnap.data());
            let userModel:UserModel =
            {id:currentUser?.uid?currentUser?.uid:"",
            username:docSnap.data().username,
            first_name:docSnap.data().first_name,
            last_name:docSnap.data().last_name,
            email:docSnap.data().email,
            password:""}
            return userModel;
        }
        else
        {
            let userModel:UserModel =
            {id:currentUser?.uid?currentUser?.uid:"",
            username:currentUser?.displayName?currentUser.displayName: "",
            first_name:currentUser?.displayName?currentUser.displayName: "",
            last_name:"Bensaid",
            email:currentUser?.email?currentUser.email: "",
            password:""}
            return userModel;
            console.warn("not found user")
        }
    }
    else{
         console.error("loging error")
         return undefined;
    }
    


   
        
   
}

export  function buildUserModelFromValues(
    firstname: string,
    lastname: string) {
    
     
    const currentUser = app.auth().currentUser;
   
        let userModel:UserModel =
        {
         id:currentUser?.uid?currentUser?.uid:"",
         username:currentUser?.displayName?currentUser.displayName: "",
         first_name:firstname,
         last_name:lastname,
         email:currentUser?.email?currentUser.email: ""
        }
        return userModel;
   
}