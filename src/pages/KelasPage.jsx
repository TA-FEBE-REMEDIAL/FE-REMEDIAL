import React from "react";
import KelasComponent from "../components/KelasComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";

function KelasPage() {
  return (
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
        <div className="container px-5">
          <KelasComponent
            title="Kelas Tersedia"
            desc="Pilih kelas di program remedial sesuai keinginan kamu, dan tambah pengetahuan kesenianmu!"
            hidden="d-none"
          />
        </div>
      </div>
    </div>
  );
}

export default KelasPage;
