import {LoginContainer } from './StyledLogin'

const Login = ()=>{
  return (
   <LoginContainer>
     <div className="login">
       <div className="wlogin">
       <p>
 please create an account to access your notes or log in with google
or github
 </p>
<strong> login whit <span>google</span> or <span>github</span> </strong>
       </div>
       <div className="loginForm">

       </div>
     </div>
   </LoginContainer>
  )
}


export default Login;