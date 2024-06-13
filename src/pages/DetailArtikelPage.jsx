import React from "react";
import img1detailartikel from "../assets/img/artikel/berita-seni/1.jpg";
import img2detailartikel from "../assets/img/artikel/berita-seni/2.jpg";
import img3detailartikel from "../assets/img/artikel/berita-seni/3.jpg";
import img4detailartikel from "../assets/img/artikel/berita-seni/5.jpg";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import JumbrotonArtikel from "../components/JumbrotonArtikel";
import ArtikelKonten from "../components/ArtikelKonten";
import ArtikelKomentar from "../components/ArtikelKomentar";
import ArtikelTerbaru from "../components/ArtikelTerbaru";
import { Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

export default function DetailArtikelPage() {
  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          to1="/"
          bread1="Beranda"
          to2="/artikel"
          bread2="Semua Artikel"
          now="Detail Artikel"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
        />

        <div className="row justify-content-center">
          <div className="">
            <JumbrotonArtikel
              kategori="Berita Seni"
              title="Mini Residensi Siswa : Mencetak Seniman Muda dari Sekolah"
              penerbit="oleh rianto rianto"
              tanggal="15-01-2019"
              img={img1detailartikel}
            />
          </div>
          <div className="isi-konten-artikel pt-5">
            <div className="container">
              <Row>
                <Col xs={9}>
                  <ArtikelKonten />
                  <ArtikelKomentar />
                </Col>
                <Col>
                  <ArtikelTerbaru />
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
