import React from 'react';
// import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from "reactstrap";
import Hero_image from "../Assests/hero.avif";
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
const navigators=useNavigate()

function GoogleSignin()
{
    navigators('/googlesignin')
}
  return ( <div>
    <Header/>
            <section>
                <Container>
                    <Row>
                        <div className='hero'>
                        <Col lg="6" md="6">
                        <div className="hero__content">
                            <h1>Welcome to Your proffesional community</h1>
                                <div className='hero_option'>
                                
                                <button class="google-button" onClick={GoogleSignin}>Continue with Google</button>
                                 <div>
                                    <button >Sign in with Gmail</button>
                                 </div>
                                </div>
                                <div>
                                <p>By clicking Continue to join or sign in, you agree to LinkedIn’s 
                                    <span class="blue-text">User Agreement</span>, 
                                    <span class="blue-text">Privacy Policy</span>, and 
                                    <span class="blue-text">Cookie Policy</span>.
                                </p>

                                </div>
                                <div className='hero__content2'>
                                <p>New to LinkedIn?<span class="join-now">Join now</span></p>

                                </div>
                        </div>
                        </Col>

                        <Col lg="6" md="6">
                        <img src={Hero_image} alt='' />
                        </Col> 
                        </div>                       
                    </Row>
                </Container>
            </section>
            </div>
  )
}

export default Hero;