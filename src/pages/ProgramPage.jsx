import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import img1program from "../assets/img/program/5.png";
import img2program from "../assets/img/program/6.png";
import img3program from "../assets/img/program/7.png";
import { Link } from "react-router-dom";

function ProgramPage() {
  const [activeTab, setActiveTab] = useState("Semua Program");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
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
        {activeTab === "Semua Program" && (
          <div className="kelas">
            <Row>
              <Col>
                <img
                  src={img1program}
                  alt=""
                  className="w-100 mb-5 rounded-top"
                />
                <div className="mb-5 px-3">
                  <h5>Belajar Pengenalan Seni Rupa</h5>
                  <p className="m-0 text-secondary opacity-50">Seni Rupa</p>
                </div>
                <div className="mb-5 px-3">
                  <p className="m-0 text-secondary fw-bold">Gratis</p>
                  <Link to={"/kelaspage/detail"}>
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-danger rounded-1 m-2">
                        Lihat Detail
                      </button>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col>
                <img
                  src={img2program}
                  alt=""
                  className="w-100 mb-5 rounded-top"
                />
                <div className="mb-5 px-3">
                  <h5>Belajar Pengenalan Seni Musik</h5>
                  <p className="m-0 text-secondary opacity-50">Seni Musik</p>
                </div>
                <div className="mb-5 px-3">
                  <p className="m-0 text-secondary fw-bold">Gratis</p>
                  <Link to={"/kelaspage/detail"}>
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-danger rounded-1 m-2">
                        Lihat Detail
                      </button>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col>
                <img
                  src={img3program}
                  alt=""
                  className="w-100 mb-5 rounded-top"
                />
                <div className="mb-5 px-3">
                  <h5>Belajar Pengenalan Seni Sastra</h5>
                  <p className="m-0 text-secondary opacity-50">Seni Sastra</p>
                </div>
                <div className="mb-5 px-3">
                  <p className="m-0 text-secondary fw-bold">Gratis</p>
                  <Link to={"/kelaspage/detail"}>
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-danger rounded-1 m-2">
                        Lihat Detail
                      </button>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        )}
        {activeTab === "Program Yang Diikuti" && (
          <div>Content for Program Saya</div>
        )}
      </div>
    </div>
  );
}

export default ProgramPage;
