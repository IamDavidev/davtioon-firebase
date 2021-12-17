import github from '../../Assets/github.svg';
import google from '../../Assets/google.svg';
import { useNavigate } from 'react-router';
import {
  HandleAccesUser,
  HandleLoginWithGoogle,
} from '../../Firebase/FirebaseAuth';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextUser } from '../../Utils/context';

const LoginUser = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useContext(ContextUser);
  const handleLogin = (e) => {
    dispatch(HandleLogin('hola', 'uid', 'email'));
  };
  return (
    <div className="login">
      <div className="wlogin">
        <h1>
          Welcome to <span>Davtion</span>.
        </h1>
        <p>
          please create an account to access your notes or log in with google or
          github
        </p>
        <p>
          login whit <span>google</span> or <span>github</span>{' '}
        </p>
        <div className="loginBtn">
          <button onClick={handleLogin}>
            <strong>
              Github
              <img src={github} alt="" />
            </strong>
          </button>
          <button
            onClick={() => {
              HandleLoginWithGoogle({ setUser: setAuthUser, navigate });
            }}
          >
            <strong>
              Google
              <img src={google} alt="" />
            </strong>
          </button>
        </div>
      </div>
      <div className="loginForm">
        <form
          onSubmit={(evt) =>
            HandleAccesUser({ evt, setUser: setAuthUser, navigate })
          }
        >
          <h1>Login</h1>
          <p>
            Don't have an account?
            <Link to="/register">Creat Your Account </Link>
            it takes less than a minute
          </p>
          <input
            required
            type="email"
            placeholder="Email or user name"
            name="email" 
            autoComplete='on'
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password" 
            autoComplete='on'
          />
          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
