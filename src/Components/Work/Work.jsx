import React from 'react'
import './Work.css'
import { Container, Row, Col } from "reactstrap";
import Profile_image from '../Assests/profile.png'


const Work = () => {
  return (
    <section>
    <Container>
        <Row>
            <div className='work'>
            <Col lg="6" md="6">
                <h1>Let the right people know you’re open to work</h1>
                <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
            </Col>

            <Col lg="6" md="6">
                <img src={Profile_image} alt='' />
            </Col>
            </div>
        </Row>
    </Container>
</section>
  )
}

export default  Work;