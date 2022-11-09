import React, { createContext, useEffect, useState } from 'react';
import getAuth, {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const MainContext = ({ children }) => {
  const auth = getAuth(app);

  // user state
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);

  //  register with email and password

  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   email password login

  const SignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //    updateUserProfile

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // google sign in
  const googleSignIN = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  // github sign in
  const githubSignIN = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  //   user logout
  const userLogout = () => {
    setLoader(true);
    return signOut(auth);
  };

  //   set user after logIN or logOut
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserInfo) => {
      setUser(currentUserInfo);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    SignIn,
    registerUser,
    userLogout,
    updateUserProfile,
    user,
    loader,
    googleSignIN,
    githubSignIN,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default MainContext;
