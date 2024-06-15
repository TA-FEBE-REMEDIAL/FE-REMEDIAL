import React, { useEffect, useState } from "react";
import axios from "axios";
import KelasComponent from "../components/KelasComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

function KelasPage() {
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    getKelas();
  }, []);

  const getKelas = async () => {
    const url = "http://localhost:5000/api/kelas/";
    const response = await axios.get(url);
    setKelas(response.data.data);
  };
  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <div className="kelas-page ">
          <BreadcrumbsComponent
            to1="/"
            bread1="Beranda"
            now="Semua Kelas"
            hide2="d-none"
            hide3="d-none"
            hide4="d-none"
            hide5="d-none"
          />
          <div className=" py-2 ">
            <div className="container">
              <KelasComponent
                title="Kelas Tersedia"
                desc="Pilih kelas di program remedial sesuai keinginan kamu, dan tambah pengetahuan kesenianmu!"
                hidden="d-none"
                type_data={kelas}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default KelasPage;
