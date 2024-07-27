import React from 'react';
import { Col, Container, Row } from "reactstrap";
import './GoogleSignIn.css';
 
 
export const GoogleSignIn = () => {


  return (
    <section>
        <Container>
            <Row>
                <div className='google'>
                    <Col lg="6" md="6">
                    <div className='google_left'>
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt='googlelogo' />
                        <h4 style={{color:"black"}}>Sign in</h4>
                        <p>Use your Google Account</p>
                    </div>
                    </Col>
                   
                    <Col lg="6" md="6">
                    <div className='google_right'>
                        <div className='google_right_option'>
                           <input type="text" 
                           placeholder='Email or phone'
                           />
                            <div className="blue-text"><a href="" >Forgot email?</a></div>
                        </div>
                        <div className='text'>
                            <p>Not your computer? Use a private browsing window to sign in.</p><p className='blue-text1'>Learn more about using Guest mode.</p>
                        </div>
                        <div className='last'>
                            <a href="" className='blue-text2'>Create account</a>
                            <button>Next</button>
                        </div>
                    </div>
                    </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}
 
export default GoogleSignIn;