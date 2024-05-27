import React from "react";
import NavigationProgramComponent from "../components/NavigationProgramComponent";
import ProgramDetailComponent from "../components/ProgramDetailComponent";
import ButtonComponent from "../components/ButtonComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1program from "../assets/img/program/5.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";

function DetailProgramPage() {
  return (
    <div className="top-nav">
      <BreadcrumbsComponent
        to1="/"
        bread1="beranda"
        to2="/program"
        bread2="Semua Program"
        now="Detail Program"
        hide3="d-none"
        hide4="d-none"
        hide5="d-none"
      />

      <div className="container mb-5">
        <JumbrotonComponent
          title="Literary Forge: Program Remedial Seni Sastra"
          kategori="Seni Sastra"
          deskrip="Program seni yang dilaksanakan oleh Serrum sebagai organisasi  pada program remedial . Siswa akan membentuk tim atau individual dan mengerjakan tantangan untuk membantu memecahkan masalah pada challenge yang dipilih,  serta dibekali dengan Keterampilan kesenian dan kemampuan digital lainnya."
          img={img1program}
          hr="d-none"
          name="Gabung Program"
          to="/program/detail-program/pilih-challange"
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
