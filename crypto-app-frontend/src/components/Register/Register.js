import { Link } from 'react-router-dom';
import './Register.css';

export const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">
                Register
            </span>
            <form className="registerForm">
                <label> Username </label>
                <input type="text" className='registerInput' placeholder='Enter username here'/>
            
                <label> Email </label>
                <input type = "text" className='registerInput' placeholder='Enter your email here'/>
            
                <label> Password </label>
                <input type = "password" className='registerInput' placeholder='Enter your email here'/>
            
                <button className="registerButton"> Register
                    {/* <Link to ="register" className='register-link'> Register </Link> */}
                </button>
            </form>
                <button className="registerLoginButton">
                    <Link to ="/log-in" className='register-link'> Login </Link>
                    
                </button>
        </div>
    );
}