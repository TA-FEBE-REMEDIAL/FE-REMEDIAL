import ArtikelList from "../components/ArtikelList";
import ButtonArtikel from "../components/ButtonArtikel";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoint";

const ArtikelPage = () => {
  const [kategori, setKategori] = useState("semua");
  const [artikel, setArtikel] = useState([]);
  const [artikelAll, setArtikelAll] = useState([]);

  const getArtikel = async () => {
    const url = `${ENDPOINTS.ARTIKEL}"`;
    const response = await axios.get(url);

    setArtikelAll(response.data.data);
  };

  useEffect(() => {
    getArtikel();
    fetchArticles(kategori);
  }, [kategori]);

  const fetchArticles = async (kategori) => {
    try {
      const response = await axios.get(
        `https://remedial.id.suika.pw/api/artikel/filter/${kategori}`
      );
      setArtikel(response.data.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <>
      <NavbarComponent />
      <main className="top-nav">
        <BreadcrumbsComponent
          to1="/"
          bread1="Beranda"
          now="Semua Artikel"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
        />

        <div className="container-fluid-1">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-10">
              <h2 className="mt-3"> Semua Artikel</h2>
              <h6 className="">
                Kami menyediakan informasi atau laporan mengenai suatu kejadian,
                isu, atau <br />
                peristiwa yang berkaitan dengan seni dan literasi
              </h6>
              <div className="d-flex justify-content-start mt-3 btn-artikel">
                <ButtonArtikel
                  click={() => setKategori("semua")}
                  type={`${
                    kategori === "semua" ? "btn-danger" : "btn-outline-danger"
                  } btn-sm`}
                  title={"Semua"}
                />
                <ButtonArtikel
                  click={() => setKategori("Berita Seni")}
                  type={`${
                    kategori === "Berita Seni"
                      ? "btn-danger"
                      : "btn-outline-danger"
                  } mx-2 btn-sm`}
                  title={"Berita Seni"}
                />
                <ButtonArtikel
                  click={() => setKategori("Kampus")}
                  type={`${
                    kategori === "Kampus" ? "btn-danger" : "btn-outline-danger"
                  } btn-sm`}
                  title={"Kampus"}
                />
                <ButtonArtikel
                  click={() => setKategori("Sekolahan")}
                  type={`${
                    kategori === "Sekolahan"
                      ? "btn-danger"
                      : "btn-outline-danger"
                  } mx-2 btn-sm`}
                  title={"Sekolahan"}
                />
              </div>
              <br />
              <ArtikelList
                data={artikel[0] === undefined ? artikelAll : artikel}
              />
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default ArtikelPage;
