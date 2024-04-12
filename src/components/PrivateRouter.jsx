// import { createContext, useEffect, useState } from "react"
// import PropTypes from 'prop-types';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
// import app from "../Firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();




// export const authContext=createContext(null);
// const auth=getAuth(app);

// const UseContext = ({children}) => {
  
//     const [name,setName]=useState(null)
//     const [loading,setLoading]=useState(true)
    

//     const GoogleLogin=()=>{
//         setLoading(true)
//        return signInWithPopup(auth,provider)
//     }

//     const CreateUserWithEmailAndPassword=(e,p)=>{
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth,e,p);

//     }
//     const UserLoginWithEmailAndPassword=(e,p)=>{
//         setLoading(true)
//         return signInWithEmailAndPassword(auth,e,p);
//     }
//     const SignOut=()=>{
//         setLoading(true)
//         return signOut(auth);
//     }
//     useEffect(()=>{
//         const subscribe= onAuthStateChanged(auth,(user)=>{
//             setName(user?.email)
//             setLoading(false)
            
//             if(user){
//                 console.log("User is Registering");
               
                
              
                
//             }else{
//                 console.log("user is Logged Out..")
                
                
        
//             }
//         })
//         return ()=>{
//             subscribe()
//         }
//     },[])
//     console.log(name)
    
 
//     const userInformation={name,CreateUserWithEmailAndPassword,UserLoginWithEmailAndPassword,SignOut,loading,GoogleLogin}
//   return (
//     <authContext.Provider value={userInformation}>
//         {children}

//     </authContext.Provider>
//   )
// }

// UseContext.propTypes={
//     children:PropTypes.node,
// }





// export default UseContext