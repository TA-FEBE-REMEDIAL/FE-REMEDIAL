import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import CardComponent from "../components/CardComponent";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";

function ProgramPage() {
  const [activeTab, setActiveTab] = useState("Semua Program");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [program, setProgram] = useState([]);

  useEffect(() => {
    getProgram();
  }, []);

  const getProgram = async () => {
    const url = "http://172.188.112.222:5000/api/program";
    const response = await axios.get(url);
    setProgram(response.data);
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
                    {program.map((data, index) => (
                      <CardComponent
                        key={index}
                        img={data.image}
                        title={data.judul}
                        category={data.kategori}
                        block="d-grid gap-2"
                        to={`/program/detail-program/${data.id}`}
                      />
                    ))}
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
