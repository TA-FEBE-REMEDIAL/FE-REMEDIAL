import React from "react";
import img1detailartikel from "../assets/img/artikel/berita-seni/1.jpg";
import img2detailartikel from "../assets/img/artikel/berita-seni/2.jpg";
import img3detailartikel from "../assets/img/artikel/berita-seni/3.jpg";
import img4detailartikel from "../assets/img/artikel/berita-seni/5.jpg";

function ArtikelTerbaru() {
  return (
    <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">
      <div className="p-3 justify-content-center">
        <h4 className="pt-3">Baca Artikel</h4>
      </div>
      <div className="col">
        <div className="fundamental">
          <div className="fundamental-item d-flex">
            <img src={img1detailartikel} className="fundamental-img" alt="" />
            <h3>
              <p href="#!">
                Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
              </p>
            </h3>
          </div>
          <div className="col">
            <div className="fundamental-item d-flex">
              <img src={img2detailartikel} className="fundamental-img" alt="" />
              <h3>
                <a href="#!">
                  Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
                </a>
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="fundamental-item d-flex">
              <img src={img3detailartikel} className="fundamental-img" alt="" />
              <h3>
                <a href="#!">
                  Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
                </a>
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="fundamental-item d-flex">
              <img src={img4detailartikel} className="fundamental-img" alt="" />
              <h3>
                <a href="#!">
                  Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtikelTerbaru;
