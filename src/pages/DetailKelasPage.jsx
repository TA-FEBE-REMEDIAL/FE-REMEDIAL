import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JumbrotonComponent from "../components/JumbrotonComponent";
import KelasComponent from "../components/KelasComponent";
import img1kelas from "../assets/img/kelas/1.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";

function DetailKelasPage() {
  return (
    <>
      <div className="top-nav">
        <BreadcrumbsComponent
          to1="/"
          bread1="beranda"
          to2="/kelaspage"
          bread2="Semua Kelas"
          now="Detail Kelas"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
        />

        <Container className="pb-1 pt-5">
          <JumbrotonComponent
            title="Belajar Pengenalan Seni Rupa"
            kategori="Seni Rupa"
            deskrip="Kelas Seni Rupa dibuat untuk kamu yang ingin mempelajari
          dasar seni rupa."
            img={img1kelas}
            hide="d-none"
            hr="d-none"
          />
        </Container>

        <div className="isi-kelas">
          <div className="isi-kelas_konten">
            <div className="container ">
              <Row className="pt-5 ">
                <Col xs={8}>
                  <h1>LOREM LOREM </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error minus aspernatur, placeat autem, perferendis vero
                    libero eveniet, adipisci excepturi nam amet necessitatibus
                    dignissimos quos vel similique ea incidunt id corrupti!
                  </p>
                  <h1>LOREM LOREM </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error minus aspernatur, placeat autem, perferendis vero
                    libero eveniet, adipisci excepturi nam amet necessitatibus
                    dignissimos quos vel similique ea incidunt id corrupti!
                  </p>
                  <h1>LOREM LOREM </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error minus aspernatur, placeat autem, perferendis vero
                    libero eveniet, adipisci excepturi nam amet necessitatibus
                    dignissimos quos vel similique ea incidunt id corrupti!
                  </p>
                  <h1>LOREM LOREM </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error minus aspernatur, placeat autem, perferendis vero
                    libero eveniet, adipisci excepturi nam amet necessitatibus
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailKelasPage;
