import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsEnvelope, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <div className="footer py-5">

      <Container >
        <Row className="d-flex justify-content-between"data-aos="fade-up" data-aos-duration="1000">
          <Col lg="5">
          <h3 className="fw-bold">Mind Land</h3>
          <p className="desc">Psychologist chat, stress testing, emergency call, discussion, health and articles.</p>
          <div className="no mb-1 mt-4">
            <Link className="text-decoration-none">
            <BsWhatsapp/>
            <p className="m-0">083129416643</p></Link>
          </div>
          <div className="mail mb-1 mt-4">
            <Link className="text-decoration-none">
            <BsEnvelope/>
            <p className="m-0">info@mindland.com</p></Link>
          </div> 

          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="articles">Article</Link>
          <Link to="about">About</Link>
          <Link to="Doctor">Doctor</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
          <div className="subscribes">
            <input type="text" placeholder="Subscribe.." />
            <button className="btn btn-danger  rounded-end rounded-0">Subscribe</button>
          </div>
          <div className="social mt-3">
            <a href=""><BsInstagram/></a>
            <a href=""><BsLinkedin/></a>
            <a href=""><BsGithub/></a>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Mind Land</span>, All Right Reserved</p></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent