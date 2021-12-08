import { StyledRegister } from './StyledRegister';

const Register = () => {
  const HandleRegister = (evt) => {
    evt.preventDefault();
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value 
    const password = evt.target.password.value
    const confirmPassword = evt.target.confirmPassword.value
    const user = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }
    console.log(user)
    
  };
  return (
    <StyledRegister>
      <h1>Register</h1>
      <form onSubmit={HandleRegister}>
        <input type="text" name="firstName" placeholder="firstName" />

        <input type="text" name="lastName" placeholder="lastName" />

        <input type="text" name="email" placeholder="email" />

        <input type="password" name="password" placeholder="password" />

        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm Password"
        />

        <button>register user in firebase</button>
      </form>
    </StyledRegister>
  );
};

export default Register;
