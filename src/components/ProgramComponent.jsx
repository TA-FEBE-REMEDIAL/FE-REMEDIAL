import React from "react";
import img1kelas from "../assets/img/kelas/1.png";
import img2kelas from "../assets/img/kelas/2.png";
import { Container, Row, Col } from "react-bootstrap";

function ProgramComponent() {
  return (
    <div className="program">
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <div>
                <h1 className="fw-bold">
                  Program <span>Remedial</span>
                </h1>
                <p>
                  Tingkat keterampilan senimu dengan ikut program di
                  Remedial.id.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          {/* <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          > */}
          <Col>
            <img src={img1kelas} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px">
              <h5>Belajar Pengenalan Seni Rupa</h5>
              <p className="m-0 text-secondary opacity-50">Seni Rupa</p>
            </div>
            <div className="mb-5 px-3">
              <p className="m-0 text-secondary fw-bold">Gratis</p>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-danger rounded-1 m-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <img src={img2kelas} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
              <h5>Belajar Pengenalan Seni Musik</h5>
              <p className="m-0 text-secondary opacity-50">Seni Musik</p>
            </div>
            <div className="mb-5 px-3">
              <p className="m-0 text-secondary fw-bold">Gratis</p>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-danger rounded-1 m-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </Col>
          {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
        </Row>
      </Container>
    </div>
  );
}

export default ProgramComponent;
