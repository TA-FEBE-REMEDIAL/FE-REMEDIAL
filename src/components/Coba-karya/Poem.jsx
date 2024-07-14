import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MentorCard from "./MentorCard";
import ProjectEditKarya from "../Karya-siswa/ProjectEditKarya";
import { useUser } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import ENDPOINTS from "../../utils/constants/endpoint";

const Poem = ({ data }) => {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const { getUserData } = useUser();
  const dataUser = getUserData();
  const user = dataUser[0] || { role: "" };

  const handleEditClick = async (id) => {
    try {
      const response = await axios.get(`${ENDPOINTS.KARYA}/${id}`);
      setCurrentItem(response.data);
      setModalShow(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDeleteClick = async (id) => {
    // try {
    //   await axios.delete(`http://localhost:5000/api/karya/${id}`);
    //   alert("Karya deleted successfully");
    //   // Optionally, you can also navigate or refresh the data
    // } catch (error) {
    //   console.error("Error deleting data: ", error);
    // }
    try {
      Swal.fire({
        title: "Apakah yakin ingin menghapus karya ini?",
        text: "Jika sudah dihapus, Anda tidak bisa dikembalikan lagi!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d05d5d",
        cancelButtonColor: "#b0a9a9",
        confirmButtonText: "Kirim",
      }).then(async (result) => {
        try {
          if (result.isConfirmed) {
            await axios.delete(`${ENDPOINTS.KARYA}/${id}`);

            Swal.fire({
              title: "Karya Terhapus!",
              text: "Karya Berhasil di Hapus!",
              icon: "success",
              confirmButtonColor: "#d05d5d",
            }).then(() => {
              // window.location.reload();
              navigate("/karya-siswa");
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Failed",
            text: `${error.response.data.message}`,
            icon: "error",
          }).then(() => {
            // window.location.reload();
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Failed",
        text: `${error.response.data.message}`,
        icon: "error",
      }).then(() => {
        // window.location.reload();
      });
    }
  };

  const lampiranJSON = data.lampiran ? JSON.parse(data.lampiran) : [];
  const linkJSON = data.link ? JSON.parse(data.link) : [];

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
              <div>
                {user.role === "mentor" && (
                  <div className="d-flex">
                    <button
                      className="btn btn-outline-danger me-2"
                      onClick={() => handleEditClick(data.id)}
                    >
                      Input Nilai
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteClick(data.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                )}
                {data.email === user.email && (
                  <button
                    className="btn btn-outline-danger ms-2"
                    onClick={() => handleEditClick(data.id)}
                  >
                    Edit Karya Siswa
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="image-container">
              <img
                src={data.image_url}
                alt="Preview"
                className="img-fixed-size"
              />
              <h6 className="pt-5">
                <b>Deskripsi</b>
              </h6>
              <section
                className="mt-4 desc_karya"
                dangerouslySetInnerHTML={{ __html: data.deskripsi }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <MentorCard
              title={data.judul}
              score={data.nilai}
              feedback={data.feedback}
              pdf={lampiranJSON}
              url={linkJSON}
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
