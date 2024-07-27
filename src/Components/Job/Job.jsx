import React from 'react'
import './Job.css'
import { Container, Row, Col } from "reactstrap";

const Job = () => {
  return (
    <section>
        <Container>
            <Row>
                <div className='job'>
                <Col lg="6" md="6">
                    <h1>Find the right job or internship for you</h1>
                </Col>

                <Col lg="6" md="">
                    <div className='job_option'>
                    <h2>SUGGESTED SEARCHES</h2>
                    <button>Engineering</button>
                    <button>Business Development</button>
                    <button>Finance</button>
                    <button>Administrative Assistance</button>
                    <button>Retail Associate</button>
                    <button>Customer Service</button>
                    <button>Operation</button>
                    <button>Information Technology</button>
                    <button>Marketing</button>
                    <button>Human Resources</button>
                    <button>Show all</button>
                    </div>
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Job;