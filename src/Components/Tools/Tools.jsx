import React from 'react'
import './Tools.css'
import { Container, Row, Col } from "reactstrap";

const Tools = () => {
  return (
    <section>
        <Container>
            <Row>
                <div  className='tool'>
                <Col lg="6" md="6">
                    <div className='tool_left'> 
                        <h1>Discover the best software tools</h1>
                        <p>Connect with buyers who have first-hand experience to find the best products for you.</p>
                    </div>
                </Col>

                <Col lg="6" md="6">
                    <div className='tool_option'>
                    <p>SUGGESTED TOOLS</p>
                    <button>E-Commerce Platforms</button>
                    <button>CRM Software</button>
                    <button>Human Resource Managment System</button>
                    <button>Recruiting Software</button>
                    <button>Sales Intelligence Software</button>
                    <button>Project Managment Software</button>
                    <button>Help Desk Software</button>
                    <button>Social Network Software</button>
                    <button>Hestop Publish Software</button>
                    <button>Show all</button>
                    </div>
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Tools;