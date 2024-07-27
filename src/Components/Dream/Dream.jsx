import React, { useState } from "react";
import './Dream.css';
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

const Dream = () => {
//   const [showVideo, setShowVideo] = useState(true);
  return (
    <section>
        <Container>
            <Row>
                <div className='dream'>
                <Col lg="6" md="6">
                <div className="dream_left">
                  showVideo ? (
                  <ReactPlayer
                    url="https://youtu.be/IlYUUN8rL_Y?si=JaPAs_ieU_7a2V5f"
                    controls={true}
                    width="220%"
                    height="50vh"
                  />)
                     {/* {!showVideo && (
                        <span className="react-player">
                          <i
                            class="ri-play-circle-line"
                            onClick={() => setShowVideo(!showVideo)} >
                          </i>
                       </span>
                     )} */}
                </div>
                </Col>

                <Col lg="6" md="6">
                    <div className="dream_right">
                    <h1>In it to chase my dream</h1>
                    <h2>Check out Gayatri’s story of finding a new job on LinkedIn</h2>
                    </div>
                </Col>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Dream;