import { Link } from "react-router-dom";
import ArtikelList from "../components/ArtikelList";
import ButtonArtikel from "../components/ButtonArtikel";

const ArtikelPage = () => {
  return (
    <main className="top-nav">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-10">
              <ol>
                <li>
                  <Link to="/home">Beranda</Link>
                </li>
                <li>Artikel</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid-1">
        <div className="row justify-content-center">
          <div className="col-11 col-xl-10">
            <h2 className="mt-3">Artikel</h2>
            <h6 className="">
              Kami menyediakan informasi atau laporan mengenai suatu kejadian,
              isu, atau <br />
              peristiwa yang berkaitan dengan seni dan literasi
            </h6>
            <div className="d-flex justify-content-start mt-3">
              <ButtonArtikel type={"btn-danger btn-sm"} title={"Semua"} />
              <ButtonArtikel
                type={"btn-outline-danger mx-3 btn-sm"}
                title={"Berita Seni"}
              />
              <ButtonArtikel
                type={"btn-outline-danger btn-sm"}
                title={"Kampus"}
              />
              <ButtonArtikel
                type={"btn-outline-danger mx-3 btn-sm"}
                title={"Sekolahan"}
              />
            </div>
            <br />
            <ArtikelList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtikelPage;
