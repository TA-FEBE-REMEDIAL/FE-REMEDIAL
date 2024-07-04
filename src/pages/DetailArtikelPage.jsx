import React, { useEffect, useState } from "react";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import JumbrotonArtikel from "../components/JumbrotonArtikel";
import ArtikelKonten from "../components/ArtikelKonten";
import ArtikelKomentar from "../components/ArtikelKomentar";
import ArtikelTerbaru from "../components/ArtikelTerbaru";
import { Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailArtikelPage() {
  const { id } = useParams();

  const [detailArtikel, setDetailArtikel] = useState([]);
  const [rekomenArtikel, setRekomenArtikel] = useState([]);

  const getdetailArtikel = async () => {
    const url = `http://172.188.112.222:5000/api/artikel/${id}`;
    const response = await axios.get(url);
    setDetailArtikel(response.data.data);
    setRekomenArtikel(response.data.rekomendasi);
  };

  useEffect(() => {
    getdetailArtikel();
  }, []);

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
          <div className="container">
            <JumbrotonArtikel
              kategori={detailArtikel.kategori}
              title={detailArtikel.title}
              penerbit={detailArtikel.author}
              tanggal={detailArtikel.date}
              img={detailArtikel.image_url}
            />
          </div>
          <div className="isi-konten-artikel pt-5">
            <div className="container">
              <Row>
                <Col xs={9}>
                  <ArtikelKonten data={detailArtikel} />
                  <ArtikelKomentar />
                </Col>
                <Col>
                  <ArtikelTerbaru data={rekomenArtikel} />
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
