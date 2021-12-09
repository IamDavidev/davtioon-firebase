//#region  imports
import { useNavigate } from 'react-router-dom';
import types from './types';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Firebase/config';
import toast from 'react-hot-toast';
//#endregion
export const HandleHome = () => {
  const Navigate = useNavigate();
  Navigate('/home');
};

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
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
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

export const HandleRegister = ({ evt }) => {
  evt.preventDefault();
  const firstName = evt.target.firstName.value;
  const lastName = evt.target.lastName.value;
  const email = evt.target.email.value;
  const password = evt.target.password.value;
  const confirmPassword = evt.target.confirmPassword.value;

  if (password !== confirmPassword) {
    toast.error('Password does not match');
    console.log('Password does not match');
  }

  if (password === confirmPassword) {
    toast.success('User created successfully');
    createUserWithEmailAndPassword(auth, email, password).then(
      (crendential) => {
        console.log(crendential);
        const { uid } = crendential.user;
      }
    );
  }
};
