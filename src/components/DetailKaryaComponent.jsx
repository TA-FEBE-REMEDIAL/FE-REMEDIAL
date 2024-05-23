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
          <div className="file-link-container">
            <div className="file-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="file-details">
              <div className="file-name">Project Challenge_Puisi.pdf</div>
              <div className="file-type">Dokumen</div>
            </div>
          </div>
          <NavLink to="/karya-siswa" className="pb-5 mt-3">
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
