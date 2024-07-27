import React from 'react'
import './PostJob.css'
import { Container, Row, Col } from "reactstrap";

const PostJob = () => {
  return (
    <section>
        <Container>
            <Row>
                <div className='postjob'>
                    <Col lg="6" md="6">
                        <h1>Post your job for millions<br /> of people to see</h1>
                    </Col>

                    <Col lg="6" md="6">
                        <div className='postjob_option'>
                            <button>Post a Job</button>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
   </section>
  )
}

export default PostJob;