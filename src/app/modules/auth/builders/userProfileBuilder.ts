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
import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProfessionalRequest } from '../../../redux/action-creators/professionals';
import { RootState } from '../../../redux/reducers/rootReducer';

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

export async function buildProfessionalUserFromAuth() {
    
    if(auth.currentUser)
    {
       
        const docRef= doc(db,"users",auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
        {
            let userModel:ProfessionalModel =
            {id:docSnap.id,
            first_name:docSnap.data().first_name,
            last_name:docSnap.data().last_name,
            email:docSnap.data().email,
            gender:docSnap.data().gender,
            createdAt:docSnap.data().createdAt,
            isProfessional:docSnap.data().isProfessional,
            services:docSnap.data().services,
            reviews:docSnap.data().reviews,
            entityType:docSnap.data().entityType,
            phoneNumber1:docSnap.data().phoneNumber1,
            phoneNumber2:docSnap.data().phoneNumber2,
            city:docSnap.data().city,
            avatar:docSnap.data().avatar,
            onlineStatus:docSnap.data().onlineStatus,
            }
            return userModel;
        }

        else{ return undefined;}
    }
    else{
         console.error("loging error")
         return undefined;
    }
}

export function initProfessionalUser( firstname: string,
    lastname: string):ProfessionalModel
{
    const currentUser = app.auth().currentUser;
    let user:ProfessionalModel ={
        id:currentUser?.uid?currentUser?.uid:"",
        first_name:firstname,
        last_name:lastname,
        email:currentUser?.email?currentUser.email: "",
        isProfessional:false,
        avatar:"",
        gender:"M",
        services:["Déménagement","Bricolage","Ménage"], 
        city:"Tanger", 
        phoneNumber1:"+212623546578",
        phoneNumber2:"+212756432387",
        createdAt:new Date().toJSON().slice(0, 10),
        entityType:"",
        reviews:0,
        onlineStatus:"False"
    };
    return user
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