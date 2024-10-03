import React, { useState } from "react";

import "../style/Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();


  const submitForm = (e) => {
    e.preventDefault();
    const nawEntry = {
      email: email,
      password: password,
    };
    setAllEntry([...allEntry, nawEntry]);
    setEmail("");
    setPassword("");
    navigate("/Home");
    
  };

  return (
    <div className="login">
      <div className="loginBg">
        <div className="login-frame">
          <div className="login-part1">
            <h1 className="login-full-text">Welcome to Chatapp</h1>
            <h1 className="login-short-text">Welcome</h1>
          </div>
          <div className="login-part2">
            <h5 className="login-head">Login to your account</h5>
            <form className="login-form" action="" onSubmit={submitForm}>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                autoComplete="current-password"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                value={password}
                autoComplete="current-password"
                placeholder={"Enter your password"}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="login-checkbox1">
                <div className="login-checkbox">
                  <input type="checkbox" />
                  &nbsp;
                  <label for="vehicle2"> Remember Me</label>
                </div>
                <a href={"gh"} onClick={() => alert("hello")} className="login-Forgot">Forgot password?</a>
              </div>
              <div className="btn-parent">
                <button className="login-btn">LogIn</button>
              </div>
            </form>

            <p className="login-para">
              Don't have an account?
              <a className="login-link" href="/Signup" >
                sign Up!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
