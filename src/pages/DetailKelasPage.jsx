import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JumbrotonComponent from "../components/JumbrotonComponent";
import KelasComponent from "../components/KelasComponent";
import { Link } from "react-router-dom";
import img1kelas from "../assets/img/kelas/1.png";

function DetailKelasPage() {
  return (
    <>
      <div className="top-nav">
        <section id="breadcrumbs" className="breadcrumbs px-5  mb-3">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-11">
                <ol>
                  <li>
                    <Link to="/home">Beranda</Link>
                  </li>
                  <li>Detail Kelas</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <Container className="pb-5">
          <JumbrotonComponent
            title="Belajar Pengenalan Seni Rupa"
            kategori="Seni Rupa"
            deskrip="Kelas Seni Rupa dibuat untuk kamu yang ingin mempelajari
              dasar seni rupa."
            img={img1kelas}
            hide="d-none"
          />
          <section id="isi-kelas">
            <Row className="pt-5">
              <Col xs={8}>
                <h1>LOREM LOREM </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error minus aspernatur, placeat autem, perferendis vero libero
                  eveniet, adipisci excepturi nam amet necessitatibus
                  dignissimos quos vel similique ea incidunt id corrupti!
                </p>
                <h1>LOREM LOREM </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error minus aspernatur, placeat autem, perferendis vero libero
                  eveniet, adipisci excepturi nam amet necessitatibus
                  dignissimos quos vel similique ea incidunt id corrupti!
                </p>
                <h1>LOREM LOREM </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error minus aspernatur, placeat autem, perferendis vero libero
                  eveniet, adipisci excepturi nam amet necessitatibus
                  dignissimos quos vel similique ea incidunt id corrupti!
                </p>
                <h1>LOREM LOREM </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error minus aspernatur, placeat autem, perferendis vero libero
                  eveniet, adipisci excepturi nam amet necessitatibus
                  dignissimos quos vel similique ea incidunt id corrupti!
                </p>
              </Col>

              <Col xs={4}>
                <iframe
                  width="350"
                  height="200"
                  src="https://www.youtube.com/embed/VV13G4g3ZhM?si=BzVSTou-epYyazJL"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
            <hr />
            <Row className="pt-5">
              <Col>
                <KelasComponent
                  title="Kelas Rekomendasi Untuk Kamu"
                  hidden="d-none"
                />
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}

export default DetailKelasPage;
