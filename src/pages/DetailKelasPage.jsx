import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JumbrotonComponent from "../components/JumbrotonComponent";
import KelasComponent from "../components/KelasComponent";
import img1kelas from "../assets/img/kelas/1.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import KelasKontenComponent from "../components/KelasKontenComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

function DetailKelasPage() {
  const { id } = useParams();

  const [detailKelas, setDetailKelas] = useState([]);
  const [kelasLimit, setKelasLimit] = useState([]);

  useEffect(() => {
    getdetailKelas();
  }, []);

  const getdetailKelas = async () => {
    const url = `http://localhost:5000/api/kelas/${id}`;
    const urlLimit = `http://localhost:5000/api/kelas`;
    const response = await axios.get(url);
    const responseLimit = await axios.get(urlLimit);
    setDetailKelas(response.data);
    setKelasLimit(responseLimit.data.limit);
  };

  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          to1="/"
          bread1="Beranda"
          to2="/kelaspage"
          bread2="Semua Kelas"
          now="Detail Kelas"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
        />

        <Container className="pb-1 pt-5">
          <JumbrotonComponent
            title={detailKelas.judul_kelas}
            kategori={detailKelas.kategori}
            deskrip={detailKelas.desc_kelas}
            img={detailKelas.image_url}
            hide="d-none"
            // hr="d-none"
          />
        </Container>

        <div className="isi-kelas">
          <div className="isi-kelas_konten">
            <div className="container ">
              <KelasKontenComponent
                materi={detailKelas.isi_materi}
                video={detailKelas.video_url}
              />
              <Row className="pb-5">
                <Col>
                  <KelasComponent
                    title="Kelas Rekomendasi Untuk Kamu"
                    hidden="d-none"
                    type_data={kelasLimit}
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
