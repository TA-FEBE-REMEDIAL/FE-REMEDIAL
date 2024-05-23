import React from "react";
import KelasComponent from "../components/KelasComponent";

function KelasPage() {
  return (
    <div className="kelas-page ">
      <KelasComponent
        title="Kelas Tersedia"
        desc="Pilih kelas di program remedial sesuai keinginan kamu, dan tambah pengetahuan kesenianmu!"
        hidden="d-none"
      />
    </div>
  );
}

export default KelasPage;
