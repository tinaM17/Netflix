import './register.scss';
import { useState,useRef } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = ()=>{
    setEmail(emailRef.current.value);
  }
  const handleFinish = ()=>{
    setPassword(passwordRef.current.value);
  }
  const login = ()=> {
        navigate('/login');
    };
    return (
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            {/* <button type="submit" className="loginButton" onClick={login}>Sign In</button> */}
          </div>
        </div>

        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} required />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input" onSubmit={login}>
              <input type="password" placeholder="password" ref={emailRef} required />
              <button
                type="submit"
                className="registerButton"
                onClick={handleFinish}
              >
                Start
              </button>
            </form>
          )}
          <p>
            Already have an account?
            <Link to="/login" className="link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    )
}

export default Register
