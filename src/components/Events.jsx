import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import { Card, Col } from 'react-bootstrap'
import event1 from '../media/event1.jpeg'
import event2 from '../media/event2.jpeg'
import event3 from '../media/event3.jpeg'
import event4 from '../media/event4.jpeg'
import event5 from '../media/event5.jpeg'
import event6 from '../media/event6.jpeg'
import event7 from '../media/event7.jpeg'
import event8 from '../media/event8.jpeg'
import event9 from '../media/event9.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import stayTuned from '../media/Stay-tuned.png'

import "./Events.css"

const Events = () => {
    return (
        <>
        <Container id="events">
            <br /> 
      <Row>
                <h2 class="section-title">Events &amp; Workshops</h2>
                <p class="section">Click <a href="https://gdsc.community.dev/usha-mittal-institute-of-technology/" className='alink' target="_blank" rel="noopener noreferrer">here</a> to know about our upcoming events!
                    <br></br><b>Come learn, share and connect with us in person.</b></p>
                {/* <Image src={stayTuned} className="stay-tuned" alt="coming-soon" align="center" /> */}
               <Col lg = {4}  style={{display:" flex",justifyContent : "left", alignItems:"left" }}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event1} />
                        <p className="legend"><h6>30 Days of Web Development</h6>
                        <br/>19th September 2021, 4pm Onwards</p>
                    </div>
                    <div>
                        <img src={event2} />
                        <p className="legend"><h6>Hack The Space [Hackathon]</h6>
                        <br/>27th November 2021, 4pm Onwards</p>
                    </div>
                    <div>
                        <img src={event3} />
                        <p className="legend"><h6>Solution Challenge [Intro Session]</h6>
                        <br/> 27th November 2021, 4pm Onwards </p>
                    </div>
                </Carousel></Col>

                <Col lg = {4}  style={{display:" flex",justifyContent : "center", alignItems:"center" , margin: "0 auto"}}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event4} />
                       
                    </div>
                    <div>
                        <img src={event6} />
                        
                    </div>
                    <div>
                        <img src={event5} />
                        
                    </div>
                 </Carousel>
               </Col>
              
               <Col lg = {4}  style={{display:" flex",justifyContent : "right", alignItems:"right" }}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event7} />
                     
                    </div>
                    <div>
                        <img src={event8} />
                       
                    </div>
                    <div>
                        <img src={event9} />
                        
                    </div>
                </Carousel></Col>
             
                {/* 
                <Carousel variant="dark">
                    <Carousel.Item interval={1000} style={{alignItems:"center"}}>
                    <Col lg={8} >
                        <Container className='event1' >
                            <Card class="events-card" style={{alignItems:"center"}}>
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event1} />
                                <Card.Body>
                                    <h4 class="card-title">30 Days of Web<br></br> Development</h4>
                                    <Card.Text>
                                        19th September 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event2} />
                                <Card.Body>
                                    <h4 class="card-title">Hack The Space<br></br>[Hackathon]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event3} />
                                <Card.Body>
                                    <h4 class="card-title">Solution Challenge<br></br>[Intro Session]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    </Carousel.Item>
                </Carousel> */}

                {/* <CardGroup>
                    <Col lg={4}>
                        <Container className='event1'>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event1} />
                                <Card.Body>
                                    <h4 class="card-title">30 Days of Web<br></br> Development</h4>
                                    <Card.Text>
                                        19th September 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event2} />
                                <Card.Body>
                                    <h4 class="card-title">Hack The Space<br></br>[Hackathon]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event3} />
                                <Card.Body>
                                    <h4 class="card-title">Solution Challenge<br></br>[Intro Session]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </CardGroup> */}
            </Row>
        </Container>
        </>
    )
}

export default Events