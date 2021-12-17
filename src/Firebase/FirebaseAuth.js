//#region  imports
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './config';
import toast from 'react-hot-toast';
//#endregion
export const HandleLoginWithGoogle = ({ setUser, navigate }) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      const { displayName, uid, email } = res.user;

      setUser({
        name: displayName,
        email,
        uid,
        isLoggedIn: true,
      });
      navigate('/home');
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      const email = err.email;
      const credential = GoogleAuthProvider.credentialFromResult(error);
    });
  // };
};
export const HandleRegisterUser = ({evt,setUser,navigate}) => {
  evt.preventDefault();
  const name = evt.target.firstName.value;
  const lastName = evt.target.lastName.value;
  const email = evt.target.email.value;
  const password = evt.target.password.value;
  const confirmPassword = evt.target.confirmPassword.value;
  if (password !== confirmPassword) {
    return toast.error('Passwords do not match');
  }
  if (password.length < 6) {
    return toast.error('Password must be at least 6 characters');
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      const userData = {
        name,
        email,
        uid: user.uid,
        isLoggedIn: true,
      };
      setUser(userData);
      return navigate('/home');
    })
    .catch((err) => {
      const errorcode = err.code;
      const errormessage = err.message;
      return toast.error(errormessage);
    });
};

export const HandleAccesUser = ({ evt, setUser, navigate }) => {
  evt.preventDefault();
  const mail = evt.target.email.value;
  const password = evt.target.password.value;
  signInWithEmailAndPassword(auth, mail, password)
    .then(({ user }) => {
      const { uid } = user;
      const name = user.displayName || ' ';
      const email = user.email;
      setUser({
        name,
        email,
        uid,
        isLoggedIn: true,
      });
      return navigate('/home');
    })
    .catch((err) => {
      const errorcode = err.code;
      const errormessage = err.message;;
      return toast.error(err.message);
    });
};
