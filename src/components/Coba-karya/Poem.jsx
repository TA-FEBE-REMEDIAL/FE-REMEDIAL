import React, { useState } from "react";
import MentorCard from "./MentorCard";
import ProjectEditModal from "../Karya-siswa/ProjectEditModal";

const Poem = ({ text }) => {
  const [modalShow, setModalShow] = useState(false);

  const project = [
    {
      title: "Puisi Indah",
      category: "Sastra",
      name: "Siswa A",
      date: "2024-06-12",
      image: "https://via.placeholder.com/150",
      poem: "Ini adalah puisi indah yang dibuat oleh Siswa A...",
      reviewScore: 95,
    },
  ];

  const data = project[0];
  return (
    <div className="poem">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="mt-4">DOSE – ASEAN Youth Forum</h1>
                <p>Published by: ASEAN Youth Forum, 2024</p>
              </div>
              <button
                className="btn btn-outline-danger mt-4 pr-5"
                onClick={() => setModalShow(true)}
              >
                Edit Karya Siswa
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="">
                <img
                  src="https://via.placeholder.com/800x400"
                  alt="Preview"
                  className="img-fluid"
                />
                <p className="mt-4">
                  DOSE adalah platform media berita yang memfasilitasi pemuda
                  ASEAN agar dapat mengetahui kejadian, berita, isu-isu dengan
                  beragam topik yang terjadi di kawasan Asia Tenggara. Website
                  ini dibuat karena dilatarbelakangi beberapa masalah:
                </p>
                <ol>
                  <li>
                    Pemuda di Asia Tenggara sulit untuk menyalurkan aspirasi
                    atau menyatakan pendapat pada khalayak ramai
                  </li>
                  <li>
                    Informasi yang beredar di media sosial belum tentu valid
                  </li>
                  <li>
                    Generasi muda di Asia Tenggara sulit mengakses informasi
                    mengenai isu penting seputar negara ASEAN
                  </li>
                  <li>
                    Kurangnya kesadaran generasi muda di Asia Tenggara mengenai
                    isu penting yang ada di sekitar kawasan Asia Tenggara
                  </li>
                </ol>
                <p>Anggi Dwi Satriawan - Backend Development MSIB Cycle 4</p>
              </div>
            </div>
            <div className="col-md-4 mr-2 ">
              <MentorCard
                title="Cerita Putus Cinta"
                score="90"
                feedback="Semangat!"
                documentName="Project Challenge_Puisi.pdf"
                documentLink="https://via.placeholder.com/100"
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectEditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={data}
      />
    </div>
  );
};

export default Poem;
