import React from 'react'
import './For.css'
import { Container, Row, Col } from "reactstrap";
import For_image from '../Assests/for.png'

const For = () => {
  return (
    <section>
        <Container>
            <Row>
                <div className='for'>
                <Col lg="6" md="6">
                    <div className='for_option'>
                      <h1>Who is LinkedIn for?</h1>
                      <h2>Anyone looking to navigate their professional life.</h2>
                      <div>
                        <button>Find a coworker or Classmate</button>
                      </div>
                      <div>
                        <button>Find a new job</button>
                      </div>
                      <div>
                        <button>Find a course or training</button>
                      </div>
                    </div>
                </Col>

                <Col lg="6" md="6">
                    <img src={For_image} alt='' /> 
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default For;