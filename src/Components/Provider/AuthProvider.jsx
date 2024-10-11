import { createContext, useEffect, useState } from "react";
import auth from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  // Sign Up Function 
  const userRegister = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  // Update Profile Function 
  const profileUpdate = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser,{
      displayName: name
    });
  }
  // Sign In Function 
  const userLogin = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unSubscribe();
    }
  },[])

  const authInfo = {user,userRegister,profileUpdate,userLogin,logOut,loading}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;