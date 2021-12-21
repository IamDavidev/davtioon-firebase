import { createContext } from 'react';

export const ContextUser = createContext({});

export const Nouser = {
  name: '',
  email: '',
  uid: '',
  isLoggedIn: false,
};

export const StateInitial = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) return user;
  return Nouser;
};
