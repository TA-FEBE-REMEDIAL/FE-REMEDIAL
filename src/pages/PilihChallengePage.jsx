import React, { useEffect, useState } from "react";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1challenge from "../assets/img/challenge-terpilih/1.png";
import ChallengePilihComponent from "../components/ChallengePilihComponent";
import ChallengeList from "../components/ChallengeList";
import img1challengeterpilih from "../assets/img/challenge/3.png";
import data from "../data/detailchallenge";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

function PilihChallengePage() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState([]);
  const [challengeAll, setChallengeAll] = useState([]);

  useEffect(() => {
    getChallenge();
  }, []);

  useEffect(() => {
    if (challenge.program_id) {
      getChallengeAll();
    }
  }, [challenge]);

  const getChallenge = async () => {
    const url = `http://172.188.112.222:5000/api/challenge/find/${id}`;
    const response = await axios.get(url);
    setChallenge(response.data);
  };

  const getChallengeAll = async () => {
    const url = `http://172.188.112.222:5000/api/challenge/${challenge.program_id}`;
    const response = await axios.get(url);
    setChallengeAll(response.data);
  };

  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          // to1="/program/detail-program/"
          // bread1="Detail program"
          to1={`/program/detail-program/pilih-challange/${challenge.program_id}`}
          bread1="Pilih Challenge"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
          now="Challenge Terpilih"
        />

        <div className="container mb-4 pt-5">
          <JumbrotonComponent
            title="Tingkatkan Skill dan Kreativitasmu Melalui Challenge di Remedial Sekarang!"
            deskrip="Pilih dan kerjakan tantangan dari berbagai partner kami untuk meningkatkan skill dan memberikan solusi digital berdasarkan kebutuhan."
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
              img={challenge.img_url}
              title1={challenge.title}
              hidedesc="d-none"
              to={`/program/detail-program/pilih-challange/challenge-terpilih/detail-challenge/${challenge.id}`}
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
          <ChallengeList data={challengeAll} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default PilihChallengePage;
