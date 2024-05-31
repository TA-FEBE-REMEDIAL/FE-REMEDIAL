import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1kelas from "../assets/img/kelas/1.png";
import img2kelas from "../assets/img/kelas/2.png";
import img3kelas from "../assets/img/kelas/3.png";
import { NavLink, Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function KelasComponent(props) {
  return (
    <div className="kelas">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="fw-bold">{props.title}</h1>
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
          <CardGroup>
            <CardComponent
              img={img1kelas}
              title="Pengenalan Seni Rupa"
              category="Seni Rupa"
              block="d-grid gap-2"
              to="/kelaspage/detail-kelas"
            />
            <CardComponent
              img={img3kelas}
              title="Seni Sastra: Pengertian, jenis, unsur, ciri, fungsi  & manfaat"
              category="Seni Sastra"
              block="d-grid gap-2"
              to="/kelaspage/detail-kelas"
            />
            <CardComponent
              img={img2kelas}
              title="Pengenalan Musik Tradisional"
              category="Seni Musik"
              block="d-grid gap-2"
              to="/kelaspage/detail-kelas"
            />
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
}

export default KelasComponent;
