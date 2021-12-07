import { useNavigate } from 'react-router-dom';
import types from './types';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const HandleHome = () => {
  const Navigate = useNavigate();
  Navigate('/home');
};

const HandleLoginWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      console.log(credential);
      const token = credential.accessToken;
      const user = result && result.user;
      console.log(user);
    })
    .catch((err) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromResult(error);
    });
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
