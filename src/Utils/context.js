import { createContext } from "react";



export const ContextUser =  createContext('context');



export const StateContext ={
    name: '',
    email: '',
    uid: '',
    isLoggedIn: false,
  };