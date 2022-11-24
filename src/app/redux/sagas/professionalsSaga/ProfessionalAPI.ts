import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import app from "../../../firebase/firebase";
import {getDocs,getFirestore,collection,query,where } from "firebase/firestore"; 

const db = getFirestore(app);

export const getAllActivProfessionals= async()=>{
let professionals:ProfessionalModel[] =[]

const q = query(collection(db, "users"), where("isProfessional", "==", true));
const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc:any) => {
    professionals =[...professionals,
      {id:doc.id, 
        avatar:doc.data().avatar, 
        first_name: doc.data().first_name,
        last_name: doc.data().last_name,
         email: doc.data().email,
         city: doc.data().city,
         services: doc.data().services,
         gender: doc.data().gender,
         isProfessional: doc.data().isProfessional,
         phoneNumber1: doc.data().phoneNumber1,
         phoneNumber2: doc.data().phoneNumber2,
         createdAt:doc.data().createdAt,
         onlineStatus:doc.data().onlineStatus,
         reviews:doc.data().reviews}];
  });
return professionals;

}