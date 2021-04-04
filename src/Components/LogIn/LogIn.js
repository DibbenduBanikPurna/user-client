import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig/FirebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const handleGoggleSign=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
    const user = result.user;
    
    const {displayName,email}=user
    const setUser={name:displayName,email:email}
    setLoggedInUser(setUser)
    sessionStorage.setItem('token',setUser)
    history.replace(from);
  
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
  
  });
    }

   

    
    return (
        <div className="text-center mt-5 pt-5">
            <input defaultValue={loggedInUser.name} type="text" placeholder="name"/>
            <br/>
            <input defaultValue={loggedInUser.email} type="email" placeholder="email"/>
            <br/>
            <button onClick={handleGoggleSign} className="btn btn-primary">Goggle Sign in</button>
           
        </div>
    );
};

export default LogIn;