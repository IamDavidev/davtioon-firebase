import { LoginContainer } from './StyledLogin';
import github from '../../Assets/github.svg'
import google from '../../Assets/google.svg'
const Login = () => {
  return (
    <LoginContainer>
      <div className="login">
        <div className="wlogin">
          <h1>
            Welcome to <span>Davtion</span>.
          </h1>
          <p>
            please create an account to access your notes or log in with google
            or github
          </p>
          <strong>
            login whit <span>google</span> or <span>github</span>{' '}
          </strong>
      <img src={github} alt="" />
      <img src={google } alt="" />
        </div>
        <div className="loginForm">
          <form onSubmit={() => console.log('hola como estas pelotudo')}>
            <h1>
              Login
            </h1>
            <p>
              Don't have an account?
              <a >Creat Your Account </a> 
              it takes less than a minute
            </p>
            <input type="email" placeholder="Email or user name " />
            <input type="password" placeholder="Password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
