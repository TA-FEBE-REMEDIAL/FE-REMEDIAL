import React from "react";
import ChallengeInfo from "../components/ChallengeInfo";
import PreparationComponent from "../components/PreparationComponent";
import MentorComponent from "../components/MentorComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import img1program from "../assets/img/program/7.png";
import JumbrotonComponent from "../components/JumbrotonComponent";
import { Row, Col } from "react-bootstrap";
import data from "../data/detailchallenge";

const DetailChallengePage = () => {
  console.log(data);
  console.log(data.detail1_challenge);
  return (
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
          title={data.jumb_title}
          kategori={data.ctgr}
          deskrip={data.jumb_desc}
          img={data.jumb_img}
          hide="d-none"
          hr="d-none"
        />
      </div>
      <div className="isi-detailchallenge py-5">
        <div className="container">
          <Row>
            <Col xs={9}>
              {/* <ChallengeInfo
                title={data.title1_challenge}
                desc1={data.desc1_challenge}
                details={data.detail1_challenge}
                desc_end={data.title1_challenge_end}
              /> */}
              {/* <PreparationComponent
                title={data.title2_challenge}
                desc={data.desc2_challenge}
                details={data.detail2_challenge}
              /> */}
            </Col>
            <Col>{/* <MentorComponent /> */}</Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailChallengePage;
