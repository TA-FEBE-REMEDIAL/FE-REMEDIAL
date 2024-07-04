import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChallengeList from "../components/ChallengeList";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1program from "../assets/img/program/7.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ENDPOINTS from "../utils/constants/endpoint";

function ChallengePage() {
  const { program_id } = useParams();
  const { id } = useParams();

  const [challenge, setChallenge] = useState([]);
  const [program, setProgram] = useState([]);

  useEffect(() => {
    getChallenge();
    getProgram();
  }, []);

  const getChallenge = async () => {
    const url = `${ENDPOINTS.CHALLENGE}/${program_id}`;
    const response = await axios.get(url);
    // console.log(response.data);
    setChallenge(response.data);
  };

  const getProgram = async () => {
    const url = `${ENDPOINTS.PROGRAM}/${program_id}`;
    const response = await axios.get(url);
    setProgram(response.data);
  };

  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          to1={`/program/detail-program/${program_id}`}
          bread1="Detail Program"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
          now="Pilih Challenge"
        />
        <div className="container mb-4">
          <JumbrotonComponent
            title={program.judul}
            kategori={program.kategori}
            deskrip={program.desc_program}
            img={program.image}
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
          <ChallengeList data={challenge} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ChallengePage;
