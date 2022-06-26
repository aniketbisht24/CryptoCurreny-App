import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">
                Login
            </span>
            <form className="loginForm">
                <label> Email </label>
                <input type = "text" className='loginInput' placeholder='Enter your email here'/>
                <label> Password </label>
                <input type = "password" className='loginInput' placeholder='Enter your email here'/>
                <button className="loginButton"> Login </button>
            </form>
            <button className="loginRegisterButton">
                <Link to ="/register" className='register-link'> Register As New User </Link>
            </button>
        </div>
    );
}
 
export default Login;