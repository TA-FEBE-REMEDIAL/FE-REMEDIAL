import React, { useState, useEffect } from "react";
import MentorCard from "./MentorCard";
import ProjectEditKarya from "../Karya-siswa/ProjectEditKarya";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Poem = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const { getUserData } = useUser();
  const dataUser = getUserData();
  const user = dataUser[0] || { role: "" };

  const handleEditClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/karya/${id}`);
      setCurrentItem(response.data);
      setModalShow(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="poem">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="title-author-meta mb-4 d-flex align-items-center justify-content-between">
              <div>
                <h1>{data.judul}</h1>
                <div className="entry-meta d-flex align-items-center mb-3">
                  <p className="category me-4">{data.tanggal_penerbit}</p>
                  <p>{data.author}</p>
                </div>
              </div>
              {user.role === "mentor" ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleEditClick(data.id)}
                >
                  Input Nilai
                </button>
              ) : (
                ""
              )}
              {data.email === user.email ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleEditClick(data.id)}
                >
                  Edit Karya Siswa
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-md-8">
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

      {currentItem && (
        <ProjectEditKarya
          show={modalShow}
          onHide={() => setModalShow(false)}
          project={currentItem}
          isMentor={user.role === "mentor"}
        />
      )}
    </div>
  );
};

export default Poem;
