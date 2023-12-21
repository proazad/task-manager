import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // Registraion a User with Email and Password
  const userRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  console.log(user);
  //   Update User Profile
  const profileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   Exixting user Sign in with Email & Password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   User Login Out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Sign with Gmail
  const signInWithGmail = () => {
    return signInWithPopup(auth, provider);
  };

  // Track User Action
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const authinfo = {
    user,
    loading,
    userRegistration,
    profileUpdate,
    userLogin,
    userLogOut,
    signInWithGmail,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
