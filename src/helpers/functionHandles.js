//#region  imports
import types from './types';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Firebase/config';
import toast from 'react-hot-toast';
import { useState } from 'react';
//#endregion

export const HandleLoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      console.log(res.user.displayName);
      console.log(res.user.email);
      console.log(res.user.photoURL);
      console.log(res.user.uid);
      console.log(res.user.emailVerified);
      console.log(res.user.providerData);
      // console.log(res);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      const email = err.email;
      const credential = GoogleAuthProvider.credentialFromResult(error);
    });
  // };
};

export const HandleLogin = (id, name) => {
  return {
    payload: {
      id,
      name,
    },
    type: types.LOGIN,
  };
};

export const HandleRegister = ({ evt, navigate }) => {
  const [nav, setNav] = useState(false)
  evt.preventDefault();
  const firstName = evt.target.firstName.value;
  const lastName = evt.target.lastName.value;
  const email = evt.target.email.value;
  const password = evt.target.password.value;
  const confirmPassword = evt.target.confirmPassword.value;
  if (password !== confirmPassword) {
    console.log('Password does not match');
    return toast.error('Passwords do not match');
  }
  if (password.length < 6) {
    console.log('Password must be at least 6 characters');
    return toast.error('Password must be at least 6 characters');
  }
  toast.success('User created successfully');
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (credential) => {
      const { uid } = credential.user;
      const { user } = credential;
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
    })
    .catch((err) => {
      const errorcode = err.code;
      const errormessage = err.message;
    });
    
    setNav(true)
  // navigate('/home');
};

export const HandleAccesUser = ({ evt, navigate }) => {
  const [nav, setNav] = useState(false)
  evt.preventDefault();
  const mail = evt.target.email.value;
  const password = evt.target.password.value;
  signInWithEmailAndPassword(auth, mail, password)
    .then((AccesUser) => {
      const user = AccesUser.user;
      const { uid } = user;

    })
    .catch((err) => {
      const errorcode = err.code;
      const errormessage = err.message;
      console.log("user did not sign up correctly");
      console.log(err.code);
      console.log(err.message);
      return toast.error(err.message);
    });
    nav && navigate('/home')
};
