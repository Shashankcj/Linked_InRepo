import React, { useState } from "react";
import "./Apple.css";
 
function Apple() {
  const [email, setEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
  };
 
  return (
    <div className="apple-container">
      <div className="apple-header">
        <div className="appleCol1">
          <img className="Apple_logo" src="https://www.apple.com/favicon.ico" alt="Apple Logo" />
          <h6  className="apple_txt">Apple ID</h6>
        </div>
        <div className="appleCol2"></div>
        <div className="appleCol3">
         <a>Sign In</a>
        </div>
      </div>
      <div
        style={{ marginTop: "5px", marginBottom: "5px" }}
        className="app-hr-line"
      ></div>
      <div className="apple-content">
        <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn Logo" />
        <h5>Use your Apple ID to sign in to LinkedIn.</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email or Phone Number"
            />
          </div>
        </form>
        <p>
          <a href="#">Forgot password?</a>
        </p>
        <div className="info">
          <p>
            In setting up Sign in with Apple, information about your
            interactions with Apple and this device may be used by Apple to help
            prevent fraud. See how your data is <a href="#">managed...</a>
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Apple;
 