import react from 'react';
import { doc, getDoc,getFirestore,collection } from "firebase/firestore"; 
import { AuthCredential, getAuth } from 'firebase/auth';

import app from '../../../firebase/firebase';

const auth = getAuth(app);
const db = getFirestore(app);
const userCollection = collection(db,"users");

export default async function useGetConnectedUserFromFirebase()
{
    if(auth.currentUser)
    {
        const docRef= doc(db,"users",auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
        {
            console.log(docSnap.data());
        }
        else
        {
            console.warn("not found user")
        }
    }
    else{ console.error("loging error")}
    
}