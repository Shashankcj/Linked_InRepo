import React from 'react'
import './Join.css'
import join_image from '../Assests/joinn.jpeg'
import './Footere.css'

const Join = () => {
  return (
    <div>
    <div className='join'>
      <h1>Join Your Colleagues, Classmates and Friends on LinkedIn</h1>
      <button>Get started</button>
      <img src={join_image} alt='' />
    </div>
    <br />
    <div>
    <footer >
      <div className='container'>
        <h4>Linked<span style={{backgroundColor:"#0073b1", color:"white",borderRadius:"7px"}}> in</span>
        </h4>
         
      </div> 
  <ul class="footer-menu">
    <li>
      <p>General</p>
      <ul>
        <li><a href="">Sign Up</a></li>
        <li><a href="">Help Center</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Press</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Developers</a></li>
      </ul>
    </li>
    <li>
      <p>Browse LinkedIn</p>
      <ul>
        <li><a href="">Learning</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Games</a></li>
        <li><a href="">Salary</a></li>
        <li><a href="">Mobile</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Top Companies Hub</a></li>
      </ul>
    </li>
    <li>
      <p>Business Solutions</p>
      <ul>
        <li><a href="">Talent</a></li>
        <li><a href="">Marketing</a></li>
        <li><a href="">Sales</a></li>
        <li><a href="">Learning</a></li>
      </ul>
    </li>
    <li>
      <p>Directories</p>
      <ul>
        <li><a href="">Members</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Companies</a></li>
        <li><a href="">Featured</a></li>
        <li><a href="">Learning</a></li>
        <li><a href="">Posts</a></li>
        <li><a href="">Articles</a></li>
        <li><a href="">Schools</a></li>
        <li><a href="">News</a></li>
        <li><a href="">News Letters</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Advice</a></li>
        <li><a href="">People Search</a></li>
      </ul>
    </li>
  </ul>
</footer>
    </div>
    </div>
  )
}

export default Join;