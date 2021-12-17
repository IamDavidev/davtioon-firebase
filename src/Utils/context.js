import { createContext } from 'react';

export const ContextUser = createContext({});

export const StateContext = {
  name: '',
  email: '',
  uid: '',
  isLoggedIn: false,
};