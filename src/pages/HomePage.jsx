import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent";
import KelasComponent from "../components/KelasComponent";
import CardArtikel from "../components/CardArtikel";
import { Link } from "react-router-dom";
import ListKaryaComponent from "../components/ListKaryaComponent";
import TopikComponent from "../components/TopikComponent";
import ProgramComponent from "../components/ProgramComponent";

const HomePage = () => {
  return (
    <div className="homepage">
      <CarouselComponent />
      <KelasComponent
        title="Kelas Remedial"
        desc="Remedial.id menyediakan berbagai macam kelas untuk meningkatkan keterampilan kesenianmu."
      />
      {/* ================ Topik Pembelajaran ================ */}
      <section id="main-topik">
        <div className="container">
          <div className="container-fluid pt-5 ">
            <div className="section-title text-center">
              <h2>Materi</h2>
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
                Karya<span>Siswa</span>
              </h3>
              <p>macam-macam karya seni yang di buat oleh beberapa siswa </p>
            </div>
          </div>
          <div className="row py-4">
            <ListKaryaComponent />
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
              Artikel<span>Terbaru</span>
            </h3>
            <p>Kalian bisa menikmati artikel terbaru di Remedial.id.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-11">
              <CardArtikel />
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
  );
};

export default HomePage;
