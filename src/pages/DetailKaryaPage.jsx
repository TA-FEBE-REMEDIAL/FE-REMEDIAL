import React from "react";
import DetailKaryaCompenent from "../components/DetailKaryaComponent.jsx";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.jsx";
import Poem from "../components/Coba-karya/Poem.jsx";
import ProjectCard from "../components/Karya-siswa/ProjectCard.jsx";
import ProjectEditModal from "../components/Karya-siswa/ProjectEditModal.jsx";

function DetailKaryaPage() {
  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          // to1="/program/detail-program/"
          // bread1="Detail program"
          to1="/karya-siswa"
          bread1="Pilih Challenge"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
          now="Challenge Terpilih"
        />
        {/* <Metadata title={title} author={author} date={date} score={score} /> */}
        <Poem />

        {/* <DetailKaryaCompenent /> */}
        {/* <ProjectCard />
        <ProjectEditModal /> */}
        <FooterComponent />
      </div>
    </>
  );
}

export default DetailKaryaPage;
