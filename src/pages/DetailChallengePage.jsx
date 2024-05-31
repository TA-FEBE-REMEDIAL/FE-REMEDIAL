import React from "react";
import ChallengeInfo from "../components/ChallengeInfo";
import PreparationComponent from "../components/PreparationComponent";
import MentorComponent from "../components/MentorComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1challengeterpilih from "../assets/img/challenge/3.png";
import { Row, Col } from "react-bootstrap";
import data from "../data/detailchallenge";
import { useParams } from "react-router-dom";
import ChallengePilihComponent from "../components/ChallengePilihComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const DetailChallengePage = () => {
  const params = useParams();
  const challenges = [data[params.id]];
  const challenge = challenges[0];

  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          to1="/program/detail-program/pilih-challange"
          bread1="Pilih Challenge"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
          now="Detail Challenge"
        />
        <div className="container mb-4 pt-5">
          <JumbrotonComponent
            title={challenge.jumb_title}
            kategori={challenge.ctgr}
            deskrip={challenge.jumb_desc}
            img={challenge.jumb_img}
            hide="d-none"
            hr="d-none"
          />
        </div>
        <div className="bg-details-challenge py-5">
          <div className="container px-5">
            <h3 className="fw-bold">Challenge</h3>
            <ChallengePilihComponent
              img={img1challengeterpilih}
              title1={challenge.title1_challenge}
              deskrip1={challenge.desc1_challenge}
              hide="d-none"
            />
          </div>
        </div>
        <div className="isi-detailchallenge py-5">
          <div className="container">
            <Row>
              <Col xs={9}>
                <ChallengeInfo
                  title={challenge.title1_challenge}
                  desc1={challenge.desc1_challenge}
                  details={challenge.detail1_challenge}
                  desc_end={challenge.title1_challenge_end}
                />
                <PreparationComponent
                  title={challenge.title2_challenge}
                  desc={challenge.desc2_challenge}
                  details={challenge.detail2_challenge}
                />
              </Col>
              <Col>
                <MentorComponent mentors={challenge.mentor} />
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
