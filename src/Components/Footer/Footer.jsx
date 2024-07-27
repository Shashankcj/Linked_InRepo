import React from 'react';
import logo from '../Assests/linkedinBack.png';
import DropDown from './DropDown';
import './Footer.css';

const Footer = () => {

  return (
    <div>
    <div className="footer">
      <div className='footer-image'>
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-links">
      <p>© 2024</p>
        <a href="#">About</a>
        <a href="#">Accessibility</a>
        <a href="#">User Agreement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Copyright Policy</a>
        <a href="#">Brand Policy</a>
        <a href="#">Guest Controls</a>
        <a href="#">Community Guidelines</a>
        <a href="" >{<DropDown/>}</a>
       
      </div>
    </div>
    </div>
  )
}

export default Footer
