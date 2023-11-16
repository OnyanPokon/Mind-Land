import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsWhatsapp,
  BsEnvelope,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Mind Land</h3>
            <p className="desc">
              Psychologist chat, stress testing, emergency call, discussion,
              health and articles.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <BsWhatsapp />
                <p className="m-0">083129416643</p>
              </Link>
            </div>
            <div className="mail mb-1 mt-4">
              <Link className="text-decoration-none">
                <BsEnvelope />
                <p className="m-0">info@mindland.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Beranda</Link>
            <Link to="articles">Artikel</Link>
            <Link to="about">Tentang</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Temukan kami Disini</h5>
            <div className="social mt-3">
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <BsLinkedin />
              </a>
              <a href="">
                <BsGithub />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()}
              <span className="fw-bold">Mind Land</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
