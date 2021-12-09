import { StyledRegister } from './StyledRegister';
import { HandleRegister } from '../../helpers/functionHandles';
import { MdPassword } from 'react-icons/md';
import { IoIosMail, IoMdPerson } from 'react-icons/io';
import {Toaster} from 'react-hot-toast'
const Register = () => {
  return (
    <StyledRegister>
      <h1>Register</h1>
      <form onSubmit={(evt) => HandleRegister({ evt })}>
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
          />
        </label>
        <label className="inputRegister">
          <MdPassword className="icon" />
          <input
            required
            type="password"
            name="confirmPassword"
            placeholder="confirm Password"
          />
        </label>
        <button>register user in firebase</button>
        <Toaster/>
      </form>
    </StyledRegister>
  );
};

export default Register;
