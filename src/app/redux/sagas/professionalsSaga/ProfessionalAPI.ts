import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import app from "../../../firebase/firebase";
import {getDocs,getFirestore,collection,query,where } from "firebase/firestore"; 
import { SearchFilterModel } from '../../../TSModels/Professionals/SearchFilterModel';

const db = getFirestore(app);

export const getAllActivProfessionals= async(searchfilter?:SearchFilterModel)=>{
let professionals:ProfessionalModel[] =[]

const conditions = [where("isProfessional", "==", true)]
if(searchfilter && searchfilter.city!="All")
{
  conditions.push(where("city", "==", searchfilter?.city))
}
if(searchfilter && searchfilter.service!="All")
{
  conditions.push(where("services", "array-contains", searchfilter.service))
}

console.log(conditions);

const q = query(collection(db, "users"), ...conditions);
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
         entityType: doc.data().entityType,
         reviews:doc.data().reviews}];
  });
return professionals;

}