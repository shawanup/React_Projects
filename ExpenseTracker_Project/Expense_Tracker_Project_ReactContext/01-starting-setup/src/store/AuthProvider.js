import { useState } from "react";
// import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";




const AuthProvider = (props) => {
  const initialToken=localStorage.getItem('token')
  const [token,setToken]=useState(initialToken);
  const [email,setEmail]=useState(initialToken);
  // const history=useHistory();
  const userLoggedIn=!!token;


  const LoginHandler = (email, token) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem('token',token)
  };
  
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('Email');
    // history.replace("/");
  };


  const authContext = {
    email:email,
    token:token,
    isLoggedIn: userLoggedIn,
    LogIn: LoginHandler,
    LogOut: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
