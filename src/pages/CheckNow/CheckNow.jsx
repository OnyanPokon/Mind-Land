import React from "react";
import CheckNowImg from "../../assets/img/Checknow.png";
import { ArticleTerbaru } from "../../data/index";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import "../../style/checknow.css";

import FaqComponent from "../../components/FaqComponent";
import CardComponent from "../../components/CardComponent";

const CheckNow = () => {
  let naviget = useNavigate();
  return (
    <div>
      <section className="checknow-section d-flex  align-items-center">
        <Container>
          <Row className="checknow-box d-flex align-items-center">
            <Col lg="6" className="p-4">
              <h1>Loyal companion in every journey of your life.</h1>
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
                  className="mt-4 btn-md text-light center"
                >
                  {" "}
                  Find Expert{" "}
                </Button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 d-flex justify-content-end">
              <img
                className="checknow-img"
                src={CheckNowImg}
                alt="checknow-image"
              />
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

export default CheckNow;
