import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import {ArticleTerbaru} from "../data/index"
import { BsChevronRight } from "react-icons/bs";
import {useNavigate} from "react-router-dom"


const HomePage = () => {
  let naviget = useNavigate();


  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-4">Solution<br /> <span>Mind Land</span> <br /> For Mental Healt.</h1>
            <button className="btn btn-outline-danger btn-xs rounded-1 me-2 mb-xs-0 mb-2">  Check Now!  </button>
            <p className="mb-4">Psychologist chat, stress testing, emergency call, discussion, health and articles.</p>
            
            <div className="services">
            <h5 className="fw-bold">Our Services</h5>
            <button className="btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2">AI Chat</button>
            <button className="btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2">Emergency Call</button>
            <button className="btn btn-outline-primary btn-lg rounded-1 mb-xs-0 mb-2">Discus</button>
            </div>

            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="articles w-100 min-vh-100">
      <Container>
        <Row>
        <Col>
        <h1 className="text-center fw-bold">Article Terbaru</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla.</p>
        </Col>
        </Row>
        <Row>
          {ArticleTerbaru.map((kelas) => {
            return(
              <Col key={kelas.id}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                <div className="mb-2 px-3">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary">terbaru</p>
                  <button className="btn btn-outline-info rounded-1">{kelas.btn}</button>
                </div>
              </Col>
              );
            })}
        </Row>
        <Row>
          <Col className="text-center">
          <button className="btn btn-primary rounded-5 btn-lg" onClick={() => naviget("/articles")}>Lihat Semua Article<BsChevronRight className="ms-1"/></button>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}

export default HomePage