import { useNavigate } from 'react-router-dom';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();

    const goToHome=()=>{
        navigate('/home');
    }
    return (
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>

        <div className="container">
          <form onSubmit={goToHome}>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or Phone number" required />
            <input type="password" placeholder="Password" required />
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix?{' '}
              <b>
                <Link to="/" className='link'>Sign up </Link>
                now.
              </b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    )
}

export default Login
