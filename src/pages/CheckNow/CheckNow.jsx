import React from "react";
import CheckNowHero from "../../assets/logofitur.json";
import Lottie from "lottie-react";
import { BsChevronDoubleRight } from "react-icons/bs";

import { Container, Row, Col, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import "../../style/checknow.css";

// import FaqComponent from "../../components/FaqComponent";
// import CardComponent from "../../components/CardComponent";

const CheckNow = () => {
  let naviget = useNavigate();
  return (
    <div>
      <section className="w-100 min-vh-100 d-flex overflow-hidden checknow-section">
        <Container>
          <Row className="checknow-box d-flex align-items-center">
            <Col lg="6" className="p-4">
              <h1 className="mt-5">
                Loyal companion in every journey of your life.
              </h1>
              <div className="checknow-card mt-4">
                <img
                  className="card-image"
                  src="https://via.placeholder.com/150"
                  alt="fiture picture"
                />
                <h2 className="checknow-title">Stress</h2>
              </div>
              <div className="checknow-card">
                <img
                  className="card-image"
                  src="https://via.placeholder.com/150"
                  alt="fiture picture"
                />
                <h2 className="checknow-title">Kecemasan</h2>
              </div>
              <div className="checknow-card">
                <img
                  className="card-image"
                  src="https://via.placeholder.com/150"
                  alt="fiture picture"
                />
                <h2 className="checknow-title">Depresi</h2>
              </div>
              <div className="checknow-card">
                <img
                  className="card-image"
                  src="https://via.placeholder.com/150"
                  alt="fiture picture"
                />
                <h2 className="checknow-title">Trauma</h2>
              </div>
              <div className="desc">
                <h1>
                  Stress is not always bad, but long-term stress can disrupt
                  your health. Various situations or life events can trigger
                  stress.
                </h1>
                <Button
                  variant="info"
                  size="lg"
                  className="mt-4 btn-md text-light center rounded-2"
                  onClick={() => naviget("/doctorcard")}
                >
                  {" "}
                  Find Expert{" "}
                </Button>
              </div>
              <div className="wrapper mt-5">
                <div className="card-fitur">
                  <div className="content">
                    <div className="img">
                      <img
                        src="https://media.istockphoto.com/id/489951194/id/vektor/pikiran-manusia-dengan-teka-teki-jigsaw.jpg?s=612x612&w=0&k=20&c=4QLFFW89dIH9rooXxPnDPbYsPaih9pHIOnGLNjSu0OU="
                        alt=""
                      />
                    </div>
                    <div className="detail">
                      <span className="name">Pilih Psikolog</span>
                      <p>
                        If you need mental health assessment and counseling.
                      </p>
                    </div>
                    <BsChevronDoubleRight />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 d-flex justify-content-end">
              <Lottie
                className="checknow-img"
                animationData={CheckNowHero}
                alt="checknow-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Docktor w-100 min-vh-100">
        <Container className="Articles">
          <Row className="pb-4">
            <Col>
              <h2 className="text-center fw-bold">Dokter</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, nulla.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CheckNow;
