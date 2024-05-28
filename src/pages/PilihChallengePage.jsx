import React from "react";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1challenge from "../assets/img/challenge-terpilih/1.png";
import ChallengePilihComponent from "../components/ChallengePilihComponent";
import ChallengeList from "../components/ChallengeList";
import img1challengeterpilih from "../assets/img/challenge/3.png";

function PilihChallengePage() {
  return (
    <div className="top-nav">
      <BreadcrumbsComponent
        to1="/"
        bread1="beranda"
        to2="/program/detail-program/pilih-challange"
        bread2="Pilih Challenge"
        hide3="d-none"
        hide4="d-none"
        hide5="d-none"
        now="Challenge Terpilih"
      />

      <div className="container mb-4 pt-5">
        <JumbrotonComponent
          title="Literary Forge: Program Remedial Seni Sastra"
          kategori="Seni Rupa"
          deskrip="Program seni yang dilaksanakan oleh Serrum sebagai organisasi  pada program remedial . Siswa akan membentuk tim atau individual dan mengerjakan tantangan untuk membantu memecahkan masalah pada challenge yang dipilih,  serta dibekali dengan Keterampilan kesenian dan kemampuan digital lainnya."
          img={img1challenge}
          hide="d-none"
          hr="d-none"
        />
      </div>
      <div className="bg-details-challenge py-5">
        <div className="container px-5">
          <h3 className="fw-bold">
            <span>Challenge</span> Terpilih
          </h3>
          <ChallengePilihComponent
            img={img1challengeterpilih}
            title1="Flash Fiction Contest - Cerita Pendek"
            hidedesc="d-none"
            to="/program/detail-program/pilih-challange/challenge-terpilih/detail-challenge"
          />
        </div>
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

export default PilihChallengePage;
