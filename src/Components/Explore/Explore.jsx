import React from 'react'
import './Explore.css'
import { Container, Row, Col } from "reactstrap";

const Explore = () => {
  return (
   <section>
        <Container>
            <Row>
                <div className='explore'>
                    <Col lg="6" md="6">
                        <h1>Explore collaborative articles</h1>
                        <p>We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.</p>
                    </Col>

                    <Col lg="6" md="6">
                    <div className='explore_option'>
                        <button>Marketing</button>
                        <button>Public administration</button>
                        <button>Healthcare</button>
                        <button>Engineering</button>
                        <button>IT Services</button>
                        <button>Sustainability</button>
                        <button>Business administration</button>
                        <button>Telecommunication</button>
                        <button>HR Managment</button>
                        <button class="blue-button">Show all</button>
                    </div>
                    </Col>
                </div>
            </Row>
        </Container>
   </section>
  )
}

export default Explore;