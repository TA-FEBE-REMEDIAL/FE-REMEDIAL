import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1kelas from "../assets/img/kelas/1.png";
import { NavLink } from "react-router-dom";

function JumbrotonComponent() {
  return (
    <section id="jumbroton">
      <div className="jumbroton-content">
        <Row>
          <Col>
            <h2 className="fw-bold">Pengenalan Seni Musik</h2>
            <p className="m-0  opacity-50">Seni Musik</p>
            <p>
              Kelas Seni Rupa dibuat untuk kamu yang ingin <br /> mempelajari
              dasar seni rupa.
            </p>
            <NavLink to={""}>
              <button className="btn btn-danger rounded-1 btn-lg mt-3">
                Ikuti Kelas
              </button>
            </NavLink>
          </Col>
          <Col>
            <img src={img1kelas} alt="" />
          </Col>
        </Row>
      </div>
      <hr />
    </section>
  );
}

export default JumbrotonComponent;
