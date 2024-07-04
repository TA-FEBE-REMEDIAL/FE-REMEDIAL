import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

import CarouselComponent from "../components/CarouselComponent";
import KelasComponent from "../components/KelasComponent";
import CardArtikel from "../components/CardArtikel";
import { Link } from "react-router-dom";
import ListKaryaComponent from "../components/ListKaryaComponent";
import TopikComponent from "../components/TopikComponent";
import ProgramComponent from "../components/ProgramComponent";
import img1artikel from "../assets/img/artikel/berita-seni/1.jpg";
import img2artikel from "../assets/img/artikel/berita-seni/2.jpg";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ArtikelList from "../components/ArtikelList";

const HomePage = () => {
  const [kelasLimit, setKelasLimit] = useState([]);
  const [artikelLimit, setArtikel] = useState([]);
  const [karyaLimit, setKarya] = useState([]);

  useEffect(() => {
    getKelas();
    getArtikel();
    getKarya();
  }, []);

  const getKelas = async () => {
    const url = "http://172.188.112.222:5000/api/kelas/";
    const response = await axios.get(url);
    setKelasLimit(response.data.limit);
  };
  const getArtikel = async () => {
    const url = "http://172.188.112.222:5000/api/artikel/";
    const response = await axios.get(url);
    setArtikel(response.data.limit);
  };
  const getKarya = async () => {
    const url = "http://172.188.112.222:5000/api/karya/";
    const response = await axios.get(url);
    setKarya(response.data.limit);
  };

  // console.log(karyaLimit);
  return (
    <>
      <NavbarComponent />
      <div className="homepage">
        <CarouselComponent />
        <KelasComponent
          title="Kelas Remedial"
          desc="Program remedial menyediakan berbagai macam kelas untuk meningkatkan pengetahuan dan keterampilan kesenianmu."
          type_data={kelasLimit}
        />

        {/* ================ Topik Pembelajaran ================ */}
        <section id="main-topik">
          <div className="container">
            <div className="container-fluid pt-5 ">
              <div className="section-title text-center">
                <h2>Topik</h2>
                <h3>
                  Berbagai Topik Pembelajaran <span>di Remedial.id</span>
                </h3>
              </div>
            </div>
            <div className="row pb-5">
              <TopikComponent />
            </div>
          </div>
        </section>

        <ProgramComponent />
        {/* =============== Karya Siswa =============== */}
        <section id="karya-siswa">
          <div className="container">
            <div className="container-fluid pt-5 ">
              <div className="section-title text-center">
                <h2>Karya Siswa</h2>
                <h3>
                  Karya <span>Siswa</span>
                </h3>
                <p>macam-macam karya seni yang di buat oleh beberapa siswa </p>
              </div>
            </div>
            <div className="row py-4">
              <ListKaryaComponent data={karyaLimit} />
            </div>
            <div className="col-lg-13 d-flex justify-content-center">
              <Link to="/karya-siswa">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-md my-4 fw-bold"
                >
                  Lihat Semua
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/*======= artikel Section ======= */}
        <section id="artikel" className="artikel">
          <div className="container-fluid pt-5 mt-5">
            <div className="section-title text-center">
              <h2>Artikel</h2>
              <h3>
                Artikel<span>Remedial</span>
              </h3>
              <p>Kalian bisa menikmati artikel terbaru di Remedial.id.</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-11">
                <ArtikelList data={artikelLimit} />
              </div>
            </div>

            <div className="col-lg-13 d-flex justify-content-center">
              <Link to="/artikel">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-md my-4 fw-bold"
                >
                  Lihat Semua
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*End Artikel Section */}
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
