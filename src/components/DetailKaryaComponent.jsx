import React from "react";
import img1detkarya from "../assets/img/karya/1.png";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function DetailKaryaCompenent() {
  return (
    <Container className="px-5">
      <section id="detail-karya">
        <Row className="top-nav">
          <Col xs={12}>
            <h1>Dongeng Pukul 10</h1>
            <p className="m-0  opacity-50">
              Puisi oleh Azka Guzamir, 24 Juli 2019
            </p>
          </Col>
          <Col xs={12} className="img-center py-5 px-0">
            <img
              src={img1detkarya}
              alt=""
              style={{ width: "95%", borderRadius: "5px" }}
            />
          </Col>

          <Col xs={12} className="text-center">
            <p>
              dalam malam <br /> ketika ibu kota tidak lagi bersuara
              <br /> tinggallah kita berdua <br />
              tersisa dan semakin suram
            </p>
            <p>
              kita naik bus kota <br />
              dari kuningan
              <br />
              sampai ragunan <br />
              semakin malam, tak lagi ada suara
            </p>
            <p>
              malam makin merasuk
              <br />
              dingin angin buatan semakin menusuk <br />
              menembus tulang rusuk
              <br />
              menebal dan tak pernah suntuk
            </p>
            <p>
              dalam malam <br />
              ketika kota dan kata tidak lagi berbicara
              <br />
              tinggallah aku sendiri
              <br />
              mengenang sekian banyak janji caleg dan menteri
              <br />
            </p>
            <p>
              terbangun juga aku di selipi
              <br />
              kuningan-ragunan cuman mimpi
              <br />
              kau juga tidak asli
              <br />
              cuma tamu yang datang lalu pergi.
            </p>
          </Col>
          <NavLink to="/karya-siswa" className="pb-5">
            <button
              type="button"
              className="btn btn-outline-danger rounded-1 m-2 "
            >
              Kembali
            </button>
          </NavLink>
        </Row>
      </section>
    </Container>
  );
}

export default DetailKaryaCompenent;
