import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent";
import KelasComponent from "../components/KelasComponent";
import TampilanMateri from "../components/MateriComponent";
import MateriComponents from "../components/MateriComponent";
import CardArtikel from "../components/CardArtikel";
import { Link } from "react-router-dom";
import ListKaryaComponent from "../components/ListKaryaComponent";

const HomePage = () => {
  return (
    <div className="homepage">
      <CarouselComponent />
      <KelasComponent desc="Remedial.id menyediakan berbagai macam kelas untuk meningkatkan keterampilan kesenianmu." />
      <MateriComponents />
      <section style={{ marginTop: "50px", backgroundColor: "#F5F5F5" }}>
        <div className="container">
          <div className="container-fluid pt-5 mt-5">
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
            <p>Kalian bisa menikmati artikel terbaru di remedial.id.</p>
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
