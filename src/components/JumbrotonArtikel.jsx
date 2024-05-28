import React from "react";
import img1detailartikel from "../assets/img/artikel/berita-seni/1.jpg";
import { Row, Col } from "react-bootstrap";

function JumbrotonArtikel(props) {
  return (
    <section id="jumbroton-artikel">
      <div className="jumbroton-content-artikel">
        <div className="container">
          <Row>
            <Col>
              <p className="m-0  py-4 opacity-50">{props.kategori}</p>
              <h2 className="fw-bold ">{props.title}</h2>
              <div className="col d-flex">
                <p className="ps-1">{props.penerbit}</p>
                <p className="ps-2">{props.tanggal}</p>
              </div>
            </Col>
            <Col>
              <img src={props.img} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default JumbrotonArtikel;
