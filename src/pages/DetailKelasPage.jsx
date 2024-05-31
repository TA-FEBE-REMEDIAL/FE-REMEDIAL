import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JumbrotonComponent from "../components/JumbrotonComponent";
import KelasComponent from "../components/KelasComponent";
import img1kelas from "../assets/img/kelas/1.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import KelasKontenComponent from "../components/KelasKontenComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

function DetailKelasPage() {
  return (
    <>
      <NavbarComponent />
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
            // hr="d-none"
          />
        </Container>

        <div className="isi-kelas">
          <div className="isi-kelas_konten">
            <div className="container ">
              <KelasKontenComponent />
              <Row className="pb-5">
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
      <FooterComponent />
    </>
  );
}

export default DetailKelasPage;
