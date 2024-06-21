import React, { useState } from "react";
import MentorCard from "./MentorCard";
import ProjectEditModal from "../Karya-siswa/ProjectEditModal";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Poem = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const { getUserData } = useUser();
  const dataUser = getUserData();

  let user = dataUser[0];
  if (!user) {
    user = "";
  }

  // const project = [
  //   {
  //     title: "Puisi Indah",
  //     category: "Sastra",
  //     name: "Siswa A",
  //     date: "2024-06-12",
  //     image: "https://via.placeholder.com/150",
  //     poem: "Ini adalah puisi indah yang dibuat oleh Siswa A...",
  //     reviewScore: 95,
  //   },
  // ];

  // const data = project[0];

  return (
    <div className="poem">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="mt-4">{data.judul}</h1>

                <div className="entry-meta d-flex align-items-center mb-3">
                  <p className="category me-4">{data.tanggal_penerbit}</p>
                  <p>{data.author}</p>
                </div>
              </div>
              {user.role === "mentor" ? (
                <>
                  <button
                    className="btn btn-outline-danger mt-4 pr-5"
                    onClick={() => setModalShow(true)}
                  >
                    Edit Karya Siswa
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="">
                <img src={data.image_url} alt="Preview" className="img-fluid" />
                <section
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: data.deskripsi }}
                />
              </div>
            </div>

            <div className="col-md-4 mr-2 ">
              <MentorCard
                title={data.judul}
                score={data.nilai}
                feedback={data.feedback}
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
