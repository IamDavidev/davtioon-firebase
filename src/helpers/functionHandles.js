import { useNavigate } from 'react-router-dom';
import types from './types';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/config';

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
