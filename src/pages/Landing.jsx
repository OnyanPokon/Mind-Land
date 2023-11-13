import { Container, Row, Col, Button } from "react-bootstrap"
import '../pages/landing.css'
import '../index.css'

function Landing() {
  return (
    <div>
      <section className='hero-section'> 
        <Container className="hero-container">
          <Row className="hero-row"> 
            <Col className="headline-col p-4">
              <div className="headline">
                <h1>Solution for mental health</h1>
                <p>Psychologist chat, stress testing, emergency call, discussion, health and articles.</p>
                <Button variant="warning">Check Now</Button>
              </div>
              <div className="services">
                <p>Our Services</p>
                <Button variant="outline-info" className="me-2" size="md">AI Chat</Button>
                <Button variant="outline-info" className="me-2" size="md">Emergecy Call</Button>
                <Button variant="outline-info" className="me-2" size="md">Discuss</Button>
              </div>
            </Col>
            <Col className="hero-col p-5">
              <img src="/Hero.png" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Landing