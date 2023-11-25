import React from "react";

import CheckNowHero from "../../assets/logofitur.json";
import StressIcon from "../../assets/img/icons/stressIcon.json";
import AnxietyIcon from "../../assets/img/icons/anxietyIcon.json";
import DepressionIcon from "../../assets/img/icons/depressionIcon.json";
import TraumaIcon from "../../assets/img/icons/traumaIcon.json";
import PsychologIcon from "../../assets/img/icons/psychologistIcon.json";

import Lottie, { LottiePlayer } from "lottie-react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../../style/checknow.css";

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
              <div className="checknow-card-group mt-3">
                <div className="checknow-card">
                  <Lottie
                    className="card-image"
                    animationData={StressIcon}
                    alt="fiture picture"
                  />
                  <h2 className="checknow-title">Stress</h2>
                </div>
                <div className="checknow-card">
                  <Lottie
                    className="card-image"
                    animationData={AnxietyIcon}
                    alt="fiture picture"
                  />
                  <h2 className="checknow-title">Gangguan Kecemasan</h2>
                </div>
                <div className="checknow-card">
                  <Lottie
                    className="card-image"
                    animationData={DepressionIcon}
                    alt="fiture picture"
                  />
                  <h2 className="checknow-title">Depresi</h2>
                </div>
                <div className="checknow-card">
                  <Lottie
                    className="card-image"
                    animationData={TraumaIcon}
                    alt="fiture picture"
                  />
                  <h2 className="checknow-title">Trauma</h2>
                </div>
              </div>
              <div className="desc mt-3">
                <h1>
                  Stress is not always bad, but long-term stress can disrupt
                  your health. Various situations or life events can trigger
                  stress.
                </h1>
                <Button
                  variant="info"
                  size="lg"
                  className="mt-3 btn-md text-light center rounded-2"
                  onClick={() => naviget("/doctorcard")}
                >
                  {" "}
                  Find Expert{" "}
                </Button>
              </div>
              <div className="wrapper mt-5 d-flex">
                <div className="card-fitur">
                  <div className="content">
                    <div className="img">
                      <Lottie animationData={PsychologIcon} alt="" />
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
                className="checknow-img mb-5"
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
