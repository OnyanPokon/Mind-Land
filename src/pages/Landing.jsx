import {Container, Row, Col, Button, Badge, Card} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import {ArticleTerbaru} from "../data/index"
import { BsChevronRight } from "react-icons/bs";
import {useNavigate} from "react-router-dom"



const HomePage = () => {
  let naviget = useNavigate();

  return (
    <div className="homepage">
      <section className="w-100 min-vh-100 d-flex align-items-center overflow-hidden hero-section">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="p-4">
              <h1 className="mb-4"><span>Mind Land</span><br />Solusi Kesehatan Mental Kamu.</h1>
              <Button variant="info" className="mb-4 btn-md text-light">  Cari Tahu Sekarang !  </Button>
              <p className="mb-4">Chat Psikolog, tes tingkat stress, emergency call, forum diskusi, artikel kesehatan lainnya.</p>
              
              <div className="services">
                <h5 className="">Layanan Kami</h5>
                <span className="services-badge"><Badge bg="info" className="me-2 mb-xs-0 mb-2">AI Chat</Badge></span>
                <span className="services-badge"><Badge bg="info" className="me-2 mb-xs-0 mb-2">Emergency Call</Badge></span>
                <span className="services-badge"><Badge bg="info" className="me-2 mb-xs-0 mb-2">Discus</Badge></span>
              </div>

            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 d-flex justify-content-end" >
              <img src={HeroImage} alt="hero-img"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="articles w-100 min-vh-100">
        <Container>
          <Row className="pb-4">
            <Col>
              <h1 className="text-center fw-bold">Artikel Terbaru</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla.</p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={4} className="g-4 d-flex justify-content-start p-4">
            {ArticleTerbaru.map((kelas) => {
              return(
                <Col key={kelas.id}>
                  <Card className="h-100"> 
                    <Card.Img variant="top"  src={`https://source.unsplash.com/random/${300}x${200 + kelas.id}/?mental_health`} alt="unsplash.com" className="article-card-image"/>
                    <Card.Body>
                      <div className="mb-3">
                        <i className={kelas.star1}></i>
                        <i className={kelas.star2}></i>
                        <i className={kelas.star3}></i>
                        <i className={kelas.star4}></i>
                        <i className={kelas.star5}></i>
                      </div>
                      <Card.Title className="">{kelas.title}</Card.Title>
                      <Card.Text>
                        {kelas.text}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="p-3">
                      <Card.Link href="">{kelas.btn}</Card.Link>
                    </Card.Footer>
                  </Card>
                </Col>
                );
              })}
          </Row>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
            <Button className="rounded-3 btn-lg text-light" variant="info" onClick={() => naviget("/articles")}>Baca Semua Article<BsChevronRight className="ms-1"/></Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default HomePage

