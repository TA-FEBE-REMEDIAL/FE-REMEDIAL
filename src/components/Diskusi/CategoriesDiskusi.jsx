import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const arrDiskusi = [
    {
      title: "Artistry Accelerator: Program Remedial Seni Rupa",
      kategori: "Artistry Accelerator",
      titleSub:
        "Tanya soal Seni Rupa disini. Kita bisa mengekspresikan perasaan dan pemikiran kita secara visual dan kreatif.",
      img: img1diskusi,
      link: "https://chat.whatsapp.com/FlMEAZqmp7t9FxjoL2NX9Z",
    },
    {
      title: "Melody Mastery: Program Remedial Seni Musik",
      kategori: "Melody Mastery",
      titleSub:
        "Tanya soal Seni Musik disini. Dengan seni musik, kita bisa menyampaikan emosi dan cerita melalui melodi dan ritme.",
      img: img2diskusi,
      link: "https://chat.whatsapp.com/KernVLv36oeBWkIdo6uJ45",
    },
    {
      title: "Literary Forge: Program Remedial Seni Sastra",
      kategori: "Literary Forge",
      titleSub:
        "Tanya soal Seni Sastra di sini. Dengan seni sastra, kita bisa menggambarkan kehidupan dan pengalaman manusia melalui kata-kata yang indah dan bermakna.",
      img: img3diskusi,
      link: "https://chat.whatsapp.com/GaogeavgxtKKDV6ySk3Pyd",
    },
    {
      title: "Stagecraft Intensive: Program Remedial Seni Pertunjukan",
      kategori: "Stagecraft Intensive",
      titleSub:
        "Tanya soal Seni Pertunjukan di sini. Dengan seni pertunjukan, kita bisa menghidupkan cerita dan karakter di atas panggung melalui akting, tarian, dan musik.",
      img: img4diskusi,
      link: "https://chat.whatsapp.com/BW2jUUMucIh4HpFMnPIqeV",
    },
  ];

  const [kategori, setKategori] = useState("Semua Kategori");
  const [program, setProgram] = useState(arrDiskusi);

  useEffect(() => {
    fetchArticles(kategori);
  }, [kategori]);

  const fetchArticles = (kategori) => {
    if (kategori === "Semua Kategori") {
      setProgram(arrDiskusi);
    } else {
      const filteredProgram = arrDiskusi.filter(
        (item) => item.kategori === kategori
      );
      setProgram(filteredProgram);
    }
  };

  return (
    <div className="container mt-5 p-5">
      <div className="d-flex justify-content-start mb-3 forum">
        <button
          className="btn btn-outline-dark btn-forum me-2"
          onClick={toggleDropdown}
        >
          {kategori}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setKategori("Semua Kategori")}
        >
          Kategori
        </button>
      </div>
      {dropdownVisible && (
        <div className="forum-diskusi-drop">
          <div className="dropdown-menu show forum">
            <button
              className="dropdown-item"
              onClick={() => setKategori("Artistry Accelerator")}
              type="button"
            >
              Artistry Accelerator
            </button>
            <button
              className="dropdown-item"
              onClick={() => setKategori("Melody Mastery")}
              type="button"
            >
              Melody Mastery
            </button>
            <button
              className="dropdown-item"
              onClick={() => setKategori("Literary Forge")}
              type="button"
            >
              Literary Forge
            </button>
            <button
              className="dropdown-item"
              onClick={() => setKategori("Stagecraft Intensive")}
              type="button"
            >
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
                <p className="custom-link">Komunitas</p>
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

        {program.map((data, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <Link to={data.link} target="_blank" className="custom-link">
              <div className="card-forum-diskusi flex-row align-items-center p-3">
                <img src={data.img} className="card-img-left-forum" alt="" />
                <div className="card-body">
                  <h5 className="card-title">
                    <p target="_blank" className="custom-link">
                      {data.title}
                    </p>
                  </h5>
                  <p className="card-text">{data.titleSub}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesDiskusi;
