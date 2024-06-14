import userIcon from '../../assets/userIcon.svg';
import lockIcon from '../../assets/lockIcon.svg';
import googleIcon from '../../assets/googleIcon.svg'
import emailIcon from '../../assets/emailIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import football from '../../assets/football.svg';
import soccer from '../../assets/soccer.svg';
import './AuthPage.css';
import { useState } from 'react';

const AuthPage = () => {

    const [modeChanger, setModeChanger] = useState("");

    const handleSignUp = () =>{
      
    }

  return (
    <>
    <div className={`conatiner ${modeChanger}`}>
      <div className="form-conatiner">
        <div className="auth-container">
          <form action="" className="sign-in-form ">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <img src={userIcon} alt="" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <img src={lockIcon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Login" />
            <p className='google-text'>or continue with google</p>
            <div className="google">
                <img src={googleIcon} alt="" className='google-icon'/>
            </div>
          </form>

          <form action="" className="sign-up-form ">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <img src={userIcon}  alt="" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <img src={emailIcon} alt="" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <img src={phoneIcon} alt="" />
              <input type="text" placeholder="Conatct Number" />
            </div>
            <div className="input-field">
              <img src={lockIcon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={handleSignUp} />
            <p className='google-text'>or continue with google</p>
            <div className="google">
                <img src={googleIcon} alt="" className='google-icon'/>
            </div>
          </form>
        </div>
      </div>
      <div className="panel-container">
        <div className="panel left-panel">
        <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => {setModeChanger("sign-up-mode")}}>
              Sign up
            </button>
          </div>
            <img src={soccer} className='image' alt="" />
        </div>
        <div className="panel right-panel">
        <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => {setModeChanger("sign-in-mode")}}>
              Sign in
            </button>
          </div>
            <img src={football} className='image' alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default AuthPage
