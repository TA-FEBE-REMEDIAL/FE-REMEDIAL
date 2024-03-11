import React from "react";
import KelasComponent from "../components/KelasComponent";

function KelasPage() {
  return (
    <div className="kelas-page ">
      <KelasComponent
        title="Kelas"
        desc="Pilih kelas di Remedial.id sesuai keinginan kamu, dan tambah skill kesenianmu!"
        hidden="d-none"
      />
    </div>
  );
}

export default KelasPage;
