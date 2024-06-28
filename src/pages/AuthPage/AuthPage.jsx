import userIcon from "../../assets/userIcon.svg";
import lockIcon from "../../assets/lockIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import football from "../../assets/football.svg";
import soccer from "../../assets/soccer.svg";
import "./AuthPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signinStart,
  signinSuccess,
  signinFailure,
} from "../../redux/userSlice";
import { ErrorToast, successToast } from "../../constants/toast";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modeChanger, setModeChanger] = useState("");
  const [signUpData, setSignUpData] = useState({});
  const [signInData, setSignInData] = useState({});
  

  const handleSignUpChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignInChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      const data = await res.json();
      if (data.success === false) {
        ErrorToast("Something went wrong")
        return;
      }
      console.log(data);
      setModeChanger("sign-in-mode");
      successToast("User Created")
    } catch (error) {
      ErrorToast(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(signinStart());
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
        ErrorToast("Somrthing went wrong")
        return;
      }
      dispatch(signinSuccess(data));
      successToast("Logged in successfully")
      navigate("/homepage");
    } catch (error) {
      dispatch(signinFailure(error.message));
      ErrorToast(error.message)
    }
  };
  return (
    <>
      <div className={`main-conatiner ${modeChanger}`}>
        <div className="form-conatiner">
          <div className="auth-container">
            <form action="" className="sign-in-form ">
              <h2 className="auth-title">Sign in</h2>
              <div className="input-field">
                <img src={userIcon} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signInData.email}
                  onChange={handleSignInChange}
                />
              </div>
              <div className="input-field">
                <img src={lockIcon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                />
              </div>
              <input
                type="submit"
                className="btn"
                value="Login"
                onClick={handleSignIn}
              />
            </form>

            <form action="" className="sign-up-form ">
              <h2 className="auth-title">Sign up</h2>
              <div className="input-field">
                <img src={userIcon} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={signUpData.name}
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="input-field">
                <img src={emailIcon} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="input-field">
                <img src={phoneIcon} alt="" />
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={signUpData.contactNumber}
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="input-field">
                <img src={lockIcon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                />
              </div>
              <input
                type="submit"
                className="btn"
                value="Sign up"
                onClick={handleSignUp}
              />
            </form>
          </div>
        </div>
        <div className="panel-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  setModeChanger("sign-up-mode");
                }}
              >
                Sign up
              </button>
            </div>
            <img src={soccer} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  setModeChanger("sign-in-mode");
                }}
              >
                Sign in
              </button>
            </div>
            <img src={football} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
