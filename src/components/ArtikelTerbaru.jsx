import React from "react";
import { articles } from "../data/artikelterbaru";

function ArtikelTerbaru() {
  return (
    <div className="artikel-terbaru ">
      <div className="article-list">
        <h2>Baca Artikel</h2>
        {articles.map((article, index) => (
          <div className="article-item" key={index}>
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">
        <div className="p-3 justify-content-center">
          <h4 className="pt-3 fw-bold">Baca Artikel</h4>
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
                <img
                  src={img2detailartikel}
                  className="fundamental-img"
                  alt=""
                />
                <h3>
                  <a href="#!">
                    Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
                  </a>
                </h3>
              </div>
            </div>
            <div className="col">
              <div className="fundamental-item d-flex">
                <img
                  src={img3detailartikel}
                  className="fundamental-img"
                  alt=""
                />
                <h3>
                  <a href="#!">
                    Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
                  </a>
                </h3>
              </div>
            </div>
            <div className="col">
              <div className="fundamental-item d-flex">
                <img
                  src={img4detailartikel}
                  className="fundamental-img"
                  alt=""
                />
                <h3>
                  <a href="#!">
                    Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan Jenis
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ArtikelTerbaru;
