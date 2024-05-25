import React from "react";
import NavigationProgramComponent from "../components/NavigationProgramComponent";
import ProgramDetailComponent from "../components/ProgramDetailComponent";
import ButtonComponent from "../components/ButtonComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1program from "../assets/img/program/5.png";
import { Link } from "react-router-dom";
function DetailProgramPage() {
  return (
    <div className="top-nav">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11">
              <ol>
                <li>
                  <Link to="/home">Beranda</Link>
                </li>
                <li>
                  <Link to="/program">Semua Program</Link>
                </li>
                <li>Detail Program</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <JumbrotonComponent
          title="Literary Forge: Program Remedial Seni Sastra"
          kategori="Seni Sastra"
          deskrip="Program seni yang dilaksanakan oleh Serrum sebagai organisasi  pada program remedial . Siswa akan membentuk tim atau individual dan mengerjakan tantangan untuk membantu memecahkan masalah pada challenge yang dipilih,  serta dibekali dengan Keterampilan kesenian dan kemampuan digital lainnya."
          img={img1program}
          hr="d-none"
        />
      </div>
      <section id="detail-pro" className="pt-5">
        <div className="app container sticky">
          <div className="sidebar sticky-right">
            <NavigationProgramComponent />
            <div className="text-center">
              <ButtonComponent name="Gabung Program" />
            </div>
          </div>
          <div className="content mb-5">
            <ProgramDetailComponent />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailProgramPage;
