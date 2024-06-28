import React, { useState } from "react";
import MentorCard from "./MentorCard";
import ProjectEditKarya from "../Karya-siswa/ProjectEditKarya";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Poem = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const { getUserData } = useUser();
  const dataUser = getUserData();

  let user = dataUser[0];
  if (!user) {
    user = { role: "" }; // Ensure user object exists
  }

  return (
    <div className="poem">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            {/* Title, Author, Publication Date, and Edit Button */}
            <div className="title-author-meta mb-4 d-flex align-items-center justify-content-between">
              <div>
                <h1>{data.judul}</h1>
                <div className="entry-meta d-flex align-items-center mb-3">
                  <p className="category me-4">{data.tanggal_penerbit}</p>
                  <p>{data.author}</p>
                </div>
              </div>
              {user.role === "mentor" ||
                (data.email === user.email && (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => setModalShow(true)}
                  >
                    Edit Karya Siswa
                  </button>
                ))}
            </div>
          </div>

          <div className="col-md-8">
            {/* Image and Description */}
            <div className="image-container">
              <img
                src={data.image_url}
                alt="Preview"
                className="img-fixed-size"
              />
              <section
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: data.deskripsi }}
              />
            </div>
          </div>

          <div className="col-md-4">
            {/* Mentor Card */}
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

      {/* Edit Modal */}
      <ProjectEditKarya
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={data}
      />
    </div>
  );
};

export default Poem;
