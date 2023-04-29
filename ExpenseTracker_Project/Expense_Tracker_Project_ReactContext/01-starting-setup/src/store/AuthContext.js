import React from "react";

const AuthContext=React.createContext({
    email:'',
    token:'',
    isLoggedIn:'',
    LogIn:()=>{},
    LogOut:()=>{}
});

export default AuthContext;

