import { User } from './../../apps/user-management/users-list/core/_models';
import app from '../../../firebase/firebase';
import firebase from "firebase/compat/app" 
import React, {useCallback} from "react";
import { AuthCredential, getAuth, signInWithEmailAndPassword, signOut,getIdToken, onAuthStateChanged,updateProfile  } from 'firebase/auth';
import { doc, setDoc,getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import axios from 'axios'
import {AuthModel, UserModel} from './_models'


const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

const auth = getAuth(app);
const db = getFirestore(app);


// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

export async function loginFS(email: string, password: string) {
  await app.auth().signInWithEmailAndPassword(email, password)
  
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {

  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  console.log("getUserByToken")
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}

export async function getUserByTokenFirebase(token: string) {
  console.log("getUserByToken firebase")
  
  const logedUser:any = await app.auth().signInWithCustomToken(token);
  console.log(logedUser)
}

export async function updateUserProfil(
  firstname: string,
  lastname: string,) {

    const auth = getAuth();
    if(auth.currentUser)
    {
      return updateProfile(auth.currentUser, {
        displayName: firstname+" "+lastname, photoURL: "https://example.com/jane-q-user/profile.jpg"
      });
    }
}

export async function createUserFS(user:UserModel) {
  await setDoc(doc(db, "users", user.id), {...user,
  avatar:"",
  gender:"M",
  services:["Déménagement","Bricolage","Ménage"], 
  isProfessional:false, 
  city:"Tanger", 
  phoneNumber1:"+212623546578",
  phoneNumber2:"+212756432387",
  createdAt:new Date().toJSON().slice(0, 10)})
  .then(()=> console.warn("inside createUserFS"))
  .catch(error=>console.error(error));
  
  
}

export async function getAuthModelFromAuth()
{

  const tokenPrmise = await app.auth().currentUser?.getIdToken();
  return {api_token:tokenPrmise?tokenPrmise:"null token"}

}
