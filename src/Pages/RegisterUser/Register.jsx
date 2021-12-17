import { StyledRegister } from './StyledRegister';
import { MdPassword } from 'react-icons/md';
import { IoIosMail, IoMdPerson } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ContextUser } from '../../Utils/context';
import { useContext } from 'react';
import { auth } from '../../Firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { HandleRegisterUser } from '../../Firebase/FirebaseAuth';
const Register = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(ContextUser);

  return (
    <StyledRegister>
      <h1>Register</h1>
      <form
        onSubmit={(evt) =>
          HandleRegisterUser({ evt, setUser: setAuthUser, navigate })
        }
      >
        <label className="inputRegister">
          <IoMdPerson className="icon" />
          <input
            required
            type="text"
            name="firstName"
            placeholder="firstName"  autoComplete
          />
        </label>
        <label className="inputRegister">
          <IoMdPerson className="icon" />
          <input required type="text" name="lastName" placeholder="lastName" autoComplete='on' />
        </label>
        <label className="inputRegister">
          <IoIosMail className="icon" />
          <input required type="text" name="email" placeholder="email" autoComplete='on' />
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
