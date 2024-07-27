import React, { useEffect, useState } from 'react';
import './Signup.css'
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const navigators=useNavigate()

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const [showPassword,setShowPassword]=useState("false")
const togglePasswordVisibility=()=>{
  setShowPassword(!showPassword);
};


      useEffect(()=>{
document.title="SingUp | LinkedIn"
      },[])
    

const handleSubmit=(e)=>
{
  e.preventDefault()
      axios.post("http://localhost:5000/signup",formData)
      .then(res=>{
        console.log(res.data);
        navigators('/home')
      }).catch(er=>{
        console.log(er);
      })

}


    function GoogleSingIn(){
      navigators("/googlesignin")
    }

     
    
      return (
        <div className='Body'>
        <div className='sign-container'>
                <h4>Linked<span style={{backgroundColor:"#0073b1", color:"white", borderRadius:"15px "}}>in</span></h4>
              
              </div>
  
        <h1 style={{textAlign:"center" 
        }}>Make the most of your professional life</h1>
        <div className="signup-container">
        <div className="signup-card">
          <form >
            <label style={{textAlign:"left"}}>
              Email or Phone Number
              <br />
              <input
                type="text"
                name="email"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
                style={{width:"98%"}}
              />
            </label>
           
            <label style={{textAlign:"left"}}>
              Password (6+ Characters)
              <br />
              <input
                type={showPassword?"password":"text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{width:"98%"}}
                />
             
            </label>
            <span className='toggle-Password' onClick={togglePasswordVisibility}>
            {showPassword?"Hide":"Show"}
            </span>
           
            <p>
              By clicking Agree & Join or Continue, you agree to the LinkedIn <a href="" >User Agreement,</a> <a href="">Privacy Policy,</a> and <a href="">Cookie Policy.</a>
            </p>
            <br />
            <button type="submit" className="Join-button" style={{borderRadius:"100px"}} onClick={handleSubmit}>Agree & Join</button>

            <p style={{textAlign:"center"}}>or</p>
            <button type="submit" className="Google-button" style={{borderRadius:"100px", border:"1px solid"}} onClick={GoogleSingIn}> <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="googlelogo" className='google-image' />   Continue with Google</button>
          </form>
          <h3 style={{textAlign:"center"}}>Already on LinkedIn? <Link to='/signin'><a >Sing in</a></Link></h3>
        </div>
      </div>
      <br /><br /><br />
      <div>
      <p style={{textAlign:"center", marginBottom:"30pxS"}}>Looking to create a page for a business? <a href="" style={{textDecoration:"none", color:"#0077B5"}}>Get help</a></p>
      </div>
      </div>
    );
  };
      
    


export default SignUp

