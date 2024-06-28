import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1komunitas from "../../assets/img/login/1.png";
import img1diskusi from "../../assets/img/diskusi/1.png";
import img2diskusi from "../../assets/img/diskusi/2.png";
import img3diskusi from "../../assets/img/diskusi/3.png";
import img4diskusi from "../../assets/img/diskusi/4.png";

function CategoriesDiskusi() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="container mt-5 p-5">
      <div className="d-flex justify-content-start mb-3 forum">
        <button
          className="btn btn-outline-dark btn-forum me-2"
          onClick={toggleDropdown}
        >
          Semua Kategori
        </button>
        <button className="btn btn-danger">Kategori</button>
      </div>
      {dropdownVisible && (
        <div className="forum-diskusi-drop">
          <div className="dropdown-menu show forum">
            <button className="dropdown-item" type="button">
              Artistry Accelerator
            </button>
            <button className="dropdown-item" type="button">
              Melody Mastery
            </button>
            <button className="dropdown-item" type="button">
              Literary Forge
            </button>
            <button className="dropdown-item" type="button">
              Stagecraft Intensive
            </button>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card-forum-diskusi flex-row align-items-center p-3">
            <img
              src={img1komunitas}
              className="card-img-left-forum"
              alt="Komunitas"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href="https://chat.whatsapp.com/link-to-komunitas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Komunitas
                </a>
              </h5>
              <p className="card-text">
                Belajar bersama berbagai Komunitas yang ada di Program Remedial
              </p>
              <div className="tags mb-2">
                <span className="tag black">Komunitas Remedial</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card-forum-diskusi flex-row align-items-center p-3">
            <img
              src={img1diskusi}
              className="card-img-left-forum"
              alt="Artistry Accelerator"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href="https://chat.whatsapp.com/link-to-seni-rupa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Artistry Accelerator: Program Remedial Seni Rupa
                </a>
              </h5>
              <p className="card-text">
                Tanya soal Seni Rupa disini. Kita bisa mengekspresikan perasaan
                dan pemikiran kita secara visual dan kreatif.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card-forum-diskusi flex-row align-items-center p-3">
            <img
              src={img2diskusi}
              className="card-img-left-forum"
              alt="Melody Mastery"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href="https://chat.whatsapp.com/link-to-seni-musik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Melody Mastery: Program Remedial Seni Musik
                </a>
              </h5>
              <p className="card-text">
                Tanya soal Seni Musik disini. Dengan seni musik, kita bisa
                menyampaikan emosi dan cerita melalui melodi dan ritme.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card-forum-diskusi flex-row align-items-center p-3">
            <img
              src={img3diskusi}
              className="card-img-left-forum"
              alt="Literary Forge"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href="https://chat.whatsapp.com/link-to-seni-sastra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Literary Forge: Program Remedial Seni Sastra
                </a>
              </h5>
              <p className="card-text">
                Tanya soal Seni Sastra di sini. Dengan seni sastra, kita bisa
                menggambarkan kehidupan dan pengalaman manusia melalui kata-kata
                yang indah dan bermakna.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card-forum-diskusi flex-row align-items-center p-3">
            <img
              src={img4diskusi}
              className="card-img-left-forum"
              alt="Stagecraft Intensive"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href="https://chat.whatsapp.com/link-to-seni-pertunjukan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Stagecraft Intensive: Program Remedial Seni Pertunjukan
                </a>
              </h5>
              <p className="card-text">
                Tanya soal Seni Pertunjukan di sini. Dengan seni pertunjukan,
                kita bisa menghidupkan cerita dan karakter di atas panggung
                melalui akting, tarian, dan musik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesDiskusi;
