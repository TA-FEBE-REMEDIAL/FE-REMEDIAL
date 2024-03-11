import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1kelas from "../assets/img/kelas/1.png";
import img2kelas from "../assets/img/kelas/2.png";
import img3kelas from "../assets/img/kelas/3.png";
import { NavLink } from "react-router-dom";

function KelasComponent(props) {
  return (
    <div className="kelas">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="fw-bold">Kelas Remedial</h1>
                <p>{props.desc}</p>
              </div>
              <div className={`btn-kelas mt-3 ${props.hidden}`}>
                <NavLink to={"/kelaspage"}>
                  <button className="btn btn-danger rounded-1 btn-lg">
                    Lihat Semua
                  </button>
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={img1kelas} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
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
          <Col>
            <img src={img3kelas} alt="" className="w-100 mb-5 rounded-top" />
            <div className="mb-5 px-3">
              <h5>Belajar Pengenalan Seni Sastra</h5>
              <p className="m-0 text-secondary opacity-50">Seni Sastra</p>
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
        </Row>
      </Container>
    </div>
  );
}

export default KelasComponent;
