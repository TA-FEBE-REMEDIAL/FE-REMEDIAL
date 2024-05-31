import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import img1program from "../assets/img/program/5.png";
import img2program from "../assets/img/program/6.png";
import img3program from "../assets/img/program/7.png";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import CardComponent from "../components/CardComponent";
import CardGroup from "react-bootstrap/CardGroup";

function ProgramPage() {
  const [activeTab, setActiveTab] = useState("Semua Program");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <NavbarComponent />
      <div className="top-nav programall">
        <div className="titlepro text-center">
          <h2>Semua Program</h2>
        </div>
        <div className="tab-header d-flex justify-content-center mt-5">
          <div
            className={`tab-item ${
              activeTab === "Semua Program" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Semua Program")}
          >
            Semua Program
          </div>
          <div
            className={`tab-item ${
              activeTab === "Program Yang Diikuti" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Program Yang Diikuti")}
          >
            Program Yang Diikuti
          </div>
        </div>

        <div className="tab-content">
          <div className="container">
            {activeTab === "Semua Program" && (
              <div className="py-4">
                <Row>
                  <CardGroup>
                    <CardComponent
                      img={img1program}
                      title="Pengenalan Seni Rupa"
                      category="Seni Rupa"
                      block="d-grid gap-2"
                      to="/program/detail-program"
                    />
                    <CardComponent
                      img={img2program}
                      title="Seni Sastra: Pengertian, jenis, unsur, ciri, fungsi  & manfaat"
                      category="Seni Sastra"
                      block="d-grid gap-2"
                      to="/program/detail-program"
                    />
                    <CardComponent
                      img={img3program}
                      title="Pengenalan Musik Tradisional"
                      category="Seni Musik"
                      block="d-grid gap-2"
                      to="/program/detail-program"
                    />
                  </CardGroup>
                </Row>
              </div>
            )}
            {activeTab === "Program Yang Diikuti" && (
              <div>Content for Program Saya</div>
            )}
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProgramPage;
