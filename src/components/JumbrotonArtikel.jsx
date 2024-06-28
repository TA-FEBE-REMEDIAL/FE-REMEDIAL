import React from "react";
import img1detailartikel from "../assets/img/artikel/berita-seni/1.jpg";
import { Row, Col } from "react-bootstrap";

function JumbrotonArtikel(props) {
  return (
    <section id="jumbroton-artikel">
      <div className="jumbroton-content-artikel">
        <div className="container">
          <div className="flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="jum-artikel">
                  <p className="m-0  py-4 opacity-50">{props.kategori}</p>
                  <h2 className="fw-bold ">{props.title}</h2>
                  <div className="col d-flex">
                    <p className="ps-1">{props.penerbit}</p>
                    <p className="ps-2">{props.tanggal}</p>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={props.img} alt="" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumbrotonArtikel;
