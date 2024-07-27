import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    document.title=" Singin | Linkedin "
  },[])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  function googleSignIn()
  {
    navigate('/googlesignin')
  }
 function appleSignIn()
 {
  navigate('/applesignin')
 }
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:5000/signin",formData)
      .then(res=>{
        if(res.data.Login)
        {
          navigate('/home')
        }
        else{
          navigate('/')
        }
      })
    }
  return (
    <div className="container">
      <h4>
        Linked<span style={{backgroundColor:"#0073b1", color:"white", borderRadius:"10px "}}>in</span>
       
      </h4>

      <div className="signin-container">
        <div className="signin-form">
          <form >
            <h2>Sign in</h2>
            <p>Stay updated on your professional world</p>
            <input
              type="text"
              name="email"
              placeholder="Email or Phone"
              className="input-field"
              value={formData.email}
              onChange={changeHandler}
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={changeHandler}
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <Link to="/forgetpwd" className="forgot-password">
              Forgot password?
            </Link>
            <button className="signin-button" type="button" onClick={handleSubmit}>
              Sign In
            </button>
            <div className="separator">or</div>
            <button type="button" className="social-button google-button" onClick={googleSignIn}>
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google logo"
              />
              Continue with Google
            </button>
            <button type="button" className="social-button apple-button" onClick={appleSignIn}>
              <img
                src="https://img.icons8.com/ios-filled/16/000000/mac-os.png"
                alt="Apple logo"
              />
              Sign in with Apple
            </button>
            <p className="agreement">
              By clicking Continue, you agree to LinkedIn's{" "}
              <Link to="/UserAgmt">User Agreement</Link>,{" "}
              <Link to="/private">Privacy Policy</Link>, and{" "}
              <Link to="/policy">Cookie Policy</Link>.
            </p>

            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
