import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth";
import { ToastContainer } from "react-toastify";

const Googleprovider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();





export const authContext=createContext(null);
const auth=getAuth(app);
// const auth=getAuth(app)

const UseContext = ({children}) => {
  
    const [name,setName]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const GithubLogin=()=>{
        setLoading(true)
       
        return signInWithPopup(auth, Githubprovider);
    }

    const GoogleLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth,Googleprovider)
    }

    const CreateUserWithEmailAndPassword=(e,p)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,e,p);

    }
    const UpdateUser=(currentUser,displayName,photoURL)=>{
        setLoading(true)
        return updateProfile(currentUser,{
            displayName, photoURL
        })
    }
    const UserLoginWithEmailAndPassword=(e,p)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,e,p);
    }
    const SignOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const subscribe= onAuthStateChanged(auth,(user)=>{
           
            setLoading(false)
            setName(null)
            
            if(user){
                setName(user)
                console.log("User is Registering");
                console.log(user)
               
                
              
                
            }else{
                
                console.log("user is Logged Out..")
                
                
        
            }
        })
        return ()=>{
            subscribe()
        }
    },[])
    console.log(name)
    
 
    const userInformation={GithubLogin,setName,name,CreateUserWithEmailAndPassword,UserLoginWithEmailAndPassword,SignOut,loading,GoogleLogin,UpdateUser}
  return (
    <authContext.Provider value={userInformation}>
        {children}

    </authContext.Provider>
  )
}

UseContext.propTypes={
    children:PropTypes.node,
}





export default UseContext;