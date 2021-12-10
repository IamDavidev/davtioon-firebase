import { StyledRegister } from './StyledRegister';
import { MdPassword } from 'react-icons/md';
import { IoIosMail, IoMdPerson } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ContextUser } from '../../Utils/context';
import { useContext } from 'react';
import { auth } from '../../Firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(ContextUser);
  const HandleRegisterUser = (evt) => {
    evt.preventDefault();
    const name = evt.target.firstName.value;
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
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const userData = {
          name,
          email,
          uid: user.uid,
          isLoggedIn: true,
        };
        setAuthUser(userData);
        console.log(authUser);
        return navigate('/home');
      })
      .catch((err) => {
        const errorcode = err.code;
        const errormessage = err.message;
      });
  };
  return (
    <StyledRegister>
      <h1>Register</h1>
      <form onSubmit={HandleRegisterUser}>
        <label className="inputRegister">
          <IoMdPerson className="icon" />
          <input
            required
            type="text"
            name="firstName"
            placeholder="firstName"
          />
        </label>
        <label className="inputRegister">
          <IoMdPerson className="icon" />
          <input required type="text" name="lastName" placeholder="lastName" />
        </label>
        <label className="inputRegister">
          <IoIosMail className="icon" />
          <input required type="text" name="email" placeholder="email" />
        </label>
        <label className="inputRegister">
          <MdPassword className="icon" />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            autoComplete="on"
          />
        </label>
        <label className="inputRegister">
          <MdPassword className="icon" />
          <input
            required
            type="password"
            name="confirmPassword"
            placeholder="confirm Password"
            autoComplete="on"
          />
        </label>
        <button> OK </button>
        <Toaster />
      </form>
    </StyledRegister>
  );
};

export default Register;
