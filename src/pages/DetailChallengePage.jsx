import React, { useEffect, useState } from "react";
import ChallengeInfo from "../components/ChallengeInfo";
import PreparationComponent from "../components/PreparationComponent";
import MentorComponent from "../components/MentorComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1challengeterpilih from "../assets/img/challenge/3.png";
import { Row, Col } from "react-bootstrap";
import data from "../data/detailchallenge";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChallengePilihComponent from "../components/ChallengePilihComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const DetailChallengePage = () => {
  const { id } = useParams();

  const [challenge, setChallenge] = useState([]);
  const [program, setProgram] = useState([]);
  const [arrMentor, setArrMentor] = useState([]);
  const idProgram = challenge.program_id;

  useEffect(() => {
    getChallenge();
  }, []);

  useEffect(() => {
    if (idProgram) {
      getProgramId();
    }
  }, [idProgram]);

  const getChallenge = async () => {
    const url = `http://localhost:5000/api/challenge/find/${id}`;
    const response = await axios.get(url);
    setChallenge(response.data);
  };

  const getProgramId = async () => {
    const url = `http://localhost:5000/api/program/${idProgram}`;
    const response = await axios.get(url);
    setProgram(response.data);
  };

  useEffect(() => {
    if (challenge.mentor) {
      const data = challenge.mentor;
      const arrMentor = data.split(", ");
      setArrMentor(arrMentor);
    }
  }, [challenge]);

  console.log(arrMentor);
  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          to1={`/program/detail-program/pilih-challange/${program.id}`}
          bread1="Pilih Challenge"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
          now="Detail Challenge"
        />
        <div className="container mb-4 pt-5">
          <JumbrotonComponent
            title={program.judul}
            deskrip={program.desc_program}
            img={program.image}
            hide="d-none"
            hr="d-none"
          />
        </div>
        <div className="bg-details-challenge py-5">
          <div className="container px-5">
            <h3 className="fw-bold">Challenge</h3>
            <ChallengePilihComponent
              img={challenge.img_url}
              title1={challenge.title}
              deskrip1={challenge.deskripsi}
              hide="d-none"
            />
          </div>
        </div>
        <div className="isi-detailchallenge py-5">
          <div className="container">
            <Row>
              <Col xs={9}>
                <ChallengeInfo desc1={challenge.detail_challenge_1} />
                <PreparationComponent desc2={challenge.detail_challenge_2} />
              </Col>
              <Col>
                <MentorComponent mentors={arrMentor} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default DetailChallengePage;
