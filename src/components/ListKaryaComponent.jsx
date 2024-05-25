import React from "react";
import { NavLink } from "react-router-dom";
import img1karya from "../assets/img/karya/1.png";
import img2karya from "../assets/img/karya/2.jpg";
import img3karya from "../assets/img/karya/3.jpg";

function ListKaryaComponent() {
  return (
    <>
      <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
        <NavLink to="/karya-siswa/detail-karyasiswa">
          <div className="card" style={{ height: "250px", width: "100%" }}>
            <img
              src={img1karya}
              className="card-img card-img-overlay"
              style={{ height: "100%" }}
              alt="..."
            />
            <div className="card-img-overlay ">
              <div className="wrap-content isi-konten">
                <h5 className="card-category">Dongeng</h5>
                <p className="card-title">Dongeng pukul 10</p>
                <p className="card-text">
                  <small>July 24, 2019</small>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
        <NavLink to="/karya-siswa/detail-karyasiswa">
          <div className="card" style={{ height: "250px", width: "100%" }}>
            <img
              src={img2karya}
              className="card-img card-img-overlay"
              style={{ height: "100%" }}
              alt="..."
            />
            <div className="card-img-overlay">
              <div className="wrap-content isi-konten">
                <h5 className="card-category">Puisi</h5>
                <p className="card-title">Kita sedang asyik-asyiknya berkata</p>
                <p className="card-text">
                  <small>July 24, 2019</small>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
        <NavLink to="/karya-siswa/detail-karyasiswa">
          <div className="card" style={{ height: "250px", width: "100%" }}>
            <img
              src={img3karya}
              className="card-img card-img-overlay"
              style={{ height: "100%" }}
              alt="..."
            />
            <div className="card-img-overlay d-flex flex-column">
              <div className="wrap-content isi-konten">
                <h5 className="card-category">Cerpen</h5>
                <p className="card-title">
                  Mini Residensi Siswa : Mencetak Seniman Muda dari Sekolah
                </p>
                <p className="card-text">
                  <small>January 15, 2019</small>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ListKaryaComponent;
