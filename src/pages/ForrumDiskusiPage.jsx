import React from "react";
import { Link } from "react-router-dom";
import img1forum from "../assets/img/forum/1.png";
function ForrumDiskusiPage() {
  return (
    <div className="top-nav">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11">
              <ol>
                <li>
                  <Link to="/home">Beranda</Link>
                </li>
                <li>Forum Diskusi</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="banner-container">
          <div className="banner-content">
            <img src={img1forum} alt="Banner" className="banner-image" />
            <div className="banner-text">
              <h2>Selamat Datang di</h2>
              <h1 className="forum mt-4">Forum Diskusi Program Remedial</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForrumDiskusiPage;
