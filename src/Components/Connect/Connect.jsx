import React from 'react'
import './Connect.css'
import { Container, Row, Col } from "reactstrap";
import Connect1_image from '../Assests/connect1.svg'
import Connect2_image from '../Assests/connect2.svg'

const Connect = () => {
  return (
    <section>
        <Container>
            <Row>
                <div className='connect'>
                <Col lg="6" md="6">
                <div className='connect_left'>
                  <img src={Connect1_image} alt='' />
                  <h1>Connect with people who can help</h1>
                  <button>Find people you know</button>
                </div>
                </Col>
                
                <Col lg="6" md="6">
                <div className='connect_right'>
                  <img src={Connect2_image} alt='' />
                  <h1>Learn the skills you need to succeed</h1>
                  <button>Choose a topic to learn about</button>
                </div>
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Connect;