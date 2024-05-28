import React from "react";
import img1detailartikel from "../assets/img/artikel/berita-seni/1.jpg";
import img2detailartikel from "../assets/img/artikel/berita-seni/2.jpg";
import img3detailartikel from "../assets/img/artikel/berita-seni/3.jpg";
import img4detailartikel from "../assets/img/artikel/berita-seni/5.jpg";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
export default function DetailArtikelPage() {
  return (
    <div className="top-nav">
      <BreadcrumbsComponent
        to1="/"
        bread1="beranda"
        to2="/artikel"
        bread2="Semua Artikel"
        now="Detail Artikel"
        hide3="d-none"
        hide4="d-none"
        hide5="d-none"
      />

      <section>
        <div className="row justify-content-center">
          <div className="col-12 bg-dark d-flex justify-content-center">
            <div className="col-11">
              <div className="row justify-content-center align-items-center">
                <div className="col-7 col-lg-9 col-xl-9 col-xxl-8 text-white">
                  <h5 className="pt-3">Lorem.</h5>
                  <h1>Lorem, ipsum dolor.</h1>
                  <div className="col d-flex">
                    <p className="ps-1">Lorem ipsum dolor sit.</p>
                    <p className="ps-3">lorem </p>
                  </div>
                </div>

                <div className="col-4 col-lg-3 col-xl-3 col-xxl-4 d-flex justify-content-end">
                  <img src={img1detailartikel} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 col-lg-11">
            <div className="row justify-content-center">
              <div className=" col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet magni perferendis debitis soluta eligendi, ipsam
                  expedita hic fuga dolorem repudiandae! Quia laudantium aliquam
                  cupiditate omnis, facilis itaque non quo temporibus.
                </p>
                <p>Lorem, ipsum dolor.</p>
                <h5 className="fw-bold">Lorem, ipsum dolor.</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci natus repellat illum sint fuga quod iusto omnis
                  quidem. Ducimus, magnam ipsum corrupti nemo omnis laudantium
                  beatae officia! Mollitia, facere amet.
                </p>
                <h5 className="fw-bold">Lorem, ipsum dolor.</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur ut quae non voluptatibus, optio cumque placeat
                  asperiores ratione dolore laboriosam, quisquam nisi
                  accusantium? Quod nam nihil, reiciendis adipisci a sint.
                </p>
                <hr />
                <section>
                  <div id="blog"></div>

                  <div className="container-fluid my-4 col-11">
                    <div className="card">
                      <h5 className="card-title m-3 fw-bold">Komentar</h5>
                      <div className="comment comment-new flex justify-content-lg-start">
                        <div className="flex-1">
                          <form
                            action="#"
                            className="comment-form d-flex align-items-center"
                          >
                            <textarea
                              placeholder="Add a comment"
                              className="comment-input col-6 mx-3 mb-3 p-3"
                            ></textarea>
                            <input
                              type="submit"
                              className="comment-submit mb-3"
                              value="Reply"
                            />
                          </form>
                        </div>
                        <div className="comments">
                          <div className="comment flex items-start justify-start">
                            <div className="flex-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">
                <div className="p-3 justify-content-center">
                  <h4 className="pt-3">Baca Artikel</h4>
                </div>
                <div className="col">
                  <div className="fundamental">
                    <div className="fundamental-item d-flex">
                      <img
                        src={img1detailartikel}
                        className="fundamental-img"
                        alt=""
                      />
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
                            Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                            Jenis
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
                            Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                            Jenis
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
                            Seni Tari: Pengertian, Unsur-Unsur, Fungsi, dan
                            Jenis
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
