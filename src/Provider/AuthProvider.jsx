/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import app from '../firebase/firebase-config';
// create context
export const AuthContext=createContext(null)

const auth=getAuth(app)
const provider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null) 
   const [loding,setloding]=useState(true) 

   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const singIn =(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
   }
   const SingOutUser=()=>{
      return signOut(auth)
   }
   const googleUser=()=>{
     return signInWithPopup(auth,provider)
   }
   useEffect(()=>{
   const unsubscript= onAuthStateChanged(auth,currentUser =>{
      console.log("current user",currentUser)
      setUser(currentUser)
      setloding(false)
    });
    return ()=>{
      unsubscript()
    }
   },[])
     const info={
       user,
       loding,
        createUser,
        singIn,
        SingOutUser,
        googleUser
     }
    return (
      <AuthContext.Provider  value={info}>
        {children}
      </AuthContext.Provider >
    );
};

export default AuthProvider;