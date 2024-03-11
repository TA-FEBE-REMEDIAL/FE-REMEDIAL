import React from "react";
import KelasComponent from "../components/KelasComponent";
import { Container } from "react-bootstrap";

function KelasPage(props) {
  return (
    <div className="kelas-page ">
      <KelasComponent
        desc="Pilih kelas di Remedial.id sesuai keinginan kamu, dan tambah skill kesenianmu!"
        hidden="d-none"
      />
    </div>
  );
}

export default KelasPage;
