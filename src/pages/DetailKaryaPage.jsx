import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.jsx";
import Poem from "../components/Coba-karya/Poem.jsx";

function DetailKaryaPage() {
  const { id } = useParams();

  const [detailKarya, setDetailKarya] = useState([]);

  const getdetailKarya = async () => {
    const url = `http://localhost:5000/api/karya/${id}`;
    const response = await axios.get(url);
    setDetailKarya(response.data.data);
  };

  useEffect(() => {
    getdetailKarya();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          // to1="/program/detail-program/"
          // bread1="Detail program"
          to1="/karya-siswa"
          bread1="Semua Karya"
          hide2="d-none"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
          now="Detail Karya Siswa"
        />
        <Poem data={detailKarya} />

        {/* <DetailKaryaCompenent /> */}
        {/* <ProjectCard />
        <ProjectEditModal /> */}
        <FooterComponent />
      </div>
    </>
  );
}

export default DetailKaryaPage;
