import React from 'react'
import Google from '../img/google.png';
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'

const Login = () => {
  return (
      <div className="login">
          <div className="loginTitle">Choose a Login method</div>
          <div className="wrapper">
              <div className="left">
                  <div className="loginButton google">
                      <img src={Google} alt="" className="icon" />
                      Google
                  </div>
                  <div className="loginButton facebook">
                      <img src={Facebook} alt="" className="icon" />
                      Facebook
                  </div>
                  <div className="loginButton github">
                      <img src={Github} alt="" className="icon" />
                      Github
                  </div>
              </div>
              <div className="center">
                  <div className="line"></div>
                  <div className="or">OR</div>
              </div>
              <div className="right">
                  <input type="text" placeholder="UserName" />
                  <input type="password" placeholder="Password" />
                  <button className="submit">Login</button>
              </div>
          </div>
    </div>
  )
}

export default Login