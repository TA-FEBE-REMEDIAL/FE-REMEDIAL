import React from "react";
import ChallengeList from "../components/ChallengeList";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1program from "../assets/img/program/7.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";

function ChallengePage() {
  return (
    <div className="top-nav">
      <BreadcrumbsComponent
        to1="/program"
        bread1="Semua Program"
        to2="/program/detail-program"
        bread2="Detail program"
        hide3="d-none"
        hide4="d-none"
        hide5="d-none"
        now="Pilih Challenge"
      />
      <div className="container mb-4">
        <JumbrotonComponent
          title="Literary Forge: Program Remedial Seni Sastra"
          kategori="Seni Rupa"
          deskrip="Program seni yang dilaksanakan oleh Serrum sebagai organisasi  pada program remedial . Siswa akan membentuk tim atau individual dan mengerjakan tantangan untuk membantu memecahkan masalah pada challenge yang dipilih,  serta dibekali dengan Keterampilan kesenian dan kemampuan digital lainnya."
          img={img1program}
          hide="d-none"
          hr="d-none"
        />
      </div>
      <div className="bg-header">
        <div className="py-3">
          <h3>Challenge</h3>
          <p>
            Silakan pilih salah satu challenge yang paling cocok denganmu,
            pastikan kamu melihat detail dari setiap challenge yang tersedia.
          </p>
        </div>
        <ChallengeList />
      </div>
    </div>
  );
}

export default ChallengePage;
