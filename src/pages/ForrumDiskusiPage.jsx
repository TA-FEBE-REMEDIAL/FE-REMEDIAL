import React from "react";
import img1forum from "../assets/img/forum/forum.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import CategoriesDiskusi from "../components/Diskusi/CategoriesDiskusi";

function ForrumDiskusiPage() {
  return (
    <>
      <NavbarComponent />
      <div className="top-nav ">
        <BreadcrumbsComponent
          to1="/"
          bread1="Beranda"
          now="Forum Diskusi"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
        />

        <section>
          <div className="banner-container">
            <div className="banner-content container">
              <div className="banner-text">
                <h2>Selamat Datang di</h2>
                <h1 className="forum mt-4">Forum Diskusi Program Remedial</h1>
              </div>
              <img src={img1forum} alt="Banner" className="banner-image " />
            </div>
          </div>
        </section>

        <div className="categories-diskusi">
          <div className="container">
            <CategoriesDiskusi />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ForrumDiskusiPage;
