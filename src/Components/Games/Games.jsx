import React from 'react'
import './Games.css'
import { Container, Row, Col } from "reactstrap";

const Games = () => {
  return (
    <section>
        <Container>
            <Row>
                <div className='games'>
                <Col lg="6" md="6">
                    <div className='games_right'>
                        <h1>Keep your mind sharp with games</h1>
                        <p>Take a break and reconnect with your network through quick daily games.</p>
                    </div>
                </Col>

                <Col lg="6" md="6">
                <div className='games_option'>
                    <button>Pinpoint</button>
                    <button>Queens</button>
                    <button>Crossclimb</button>
                </div>
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Games;