import { Container, Row, Col, Button, Badge, Card } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { ArticleTerbaru } from "../data/index";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../style/landing.css";
import CardComponent from "../components/CardComponent";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let naviget = useNavigate();

  return (
    <div className="homepage">
      <section className="w-100 min-vh-100 d-flex align-items-center overflow-hidden hero-section">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="p-4">
              <h1 className="mb-4">
                <span>Mind Land</span>
                <br />
                Solusi Kesehatan Mental Kamu.
              </h1>
              <Button
                variant="info"
                className="mb-4 btn-md text-light "
                onClick={() => naviget("/CheckNow")}
              >
                {" "}
                Cari Tahu Sekarang !{" "}
              </Button>
              <p className="mb-4">
                Chat Psikolog, tes tingkat stress, emergency call, forum
                diskusi, artikel kesehatan lainnya.
              </p>

              <div className="services">
                <h5 className="">Layanan Kami</h5>
                <span className="services-badge ">
                  <Badge bg="info" className="me-2 mb-xs-0 mb-2 ">
                    AI Chat
                  </Badge>
                </span>
                <span className="services-badge">
                  <Badge bg="info" className="me-2 mb-xs-0 mb-2">
                    Emergency Call
                  </Badge>
                </span>
                <span className="services-badge">
                  <Badge bg="info" className="me-2 mb-xs-0 mb-2">
                    Discus
                  </Badge>
                </span>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 d-flex justify-content-end">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="articles w-100 min-vh-100">
        <Container className="Articles">
          <Row className="pb-4">
            <Col>
              <h2 className="text-center fw-bold">Artikel Terbaru</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, nulla.
              </p>
            </Col>
          </Row>
          <Row
            xs={1}
            md={2}
            lg={4}
            className="g-4 d-flex justify-content-start p-4"
          >
            {ArticleTerbaru.map((kelas) => {
              return (
                <CardComponent key={kelas.id} data={kelas}></CardComponent>
              );
            })}
          </Row>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <Button
                className="rounded-3 btn-lg text-light"
                variant="info"
                onClick={() => naviget("/articles")}
              >
                Baca Semua Article
                <BsChevronRight className="ms-1" />
              </Button>
            </Col>
          </Row>
          {/* Faq Section */}
          <FaqComponent />
          {/* Faq Section */}
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
