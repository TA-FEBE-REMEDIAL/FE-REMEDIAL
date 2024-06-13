import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import img1kelas from "../assets/img/kelas/1.png";
import img2kelas from "../assets/img/kelas/2.png";
import img3kelas from "../assets/img/kelas/3.png";
import { NavLink, Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function KelasComponent(props) {
  // const [kelas, setKelas] = useState([]);
  // const [kelasLimit, setKelasLimit] = useState([]);

  // useEffect(() => {
  //   getKelas();
  // }, []);

  // const getKelas = async () => {
  //   const url = "http://localhost:5000/api/kelas/";
  //   const response = await axios.get(url);
  //   setKelas(response.props.dataKelas);
  //   setKelasLimit(response.props.kelasLimit);
  // };

  const kelasType = props.type_data;
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
          <div className="cardClass">
            <CardGroup>
              {kelasType.map((data, index) => (
                <>
                  <CardComponent
                    key={index}
                    img={data.image_url}
                    title={data.judul_kelas}
                    category={data.kategori}
                    block="d-grid gap-2"
                    to={`/kelaspage/detail-kelas/${data.id}`}
                  />

                  {/* <div dangerouslySetInnerHTML={{ __html: data.isi_materi }} /> */}
                </>
              ))}
            </CardGroup>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default KelasComponent;
