import React, { useEffect, useState } from "react";
import NavigationProgramComponent from "../components/NavigationProgramComponent";
import ProgramDetailComponent from "../components/ProgramDetailComponent";
import ButtonComponent from "../components/ButtonComponent";
import JumbrotonComponent from "../components/JumbrotonComponent";
import img1program from "../assets/img/program/7.png";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailProgramPage() {
  const { id } = useParams();

  const [detail_program, setDetailProgram] = useState([]);

  const getdetailProgram = async () => {
    const url = `http://172.188.112.222:5000/api/program/${id}`;
    const response = await axios.get(url);
    setDetailProgram(response.data);
  };

  useEffect(() => {
    getdetailProgram();
  }, []);

  // console.log(detail_program);

  return (
    <>
      <NavbarComponent />
      <div className="top-nav">
        <BreadcrumbsComponent
          to1="/"
          bread1="Beranda"
          to2="/program"
          bread2="Semua Program"
          now="Detail Program"
          hide3="d-none"
          hide4="d-none"
          hide5="d-none"
        />

        <div className="container mb-5">
          <JumbrotonComponent
            title={detail_program.judul}
            kategori={detail_program.kategori}
            deskrip={detail_program.desc_program}
            img={detail_program.image}
            hr="d-none"
            name="Gabung Program"
            to={`/program/detail-program/pilih-challange/${detail_program.id}`}
          />
        </div>
        <section id="detail-pro" className="pt-5">
          <div className="app container sticky">
            <div className="sidebar sticky-right">
              <NavigationProgramComponent />
              <div className="text-center">
                <ButtonComponent
                  name="Gabung Program"
                  to={`/program/detail-program/pilih-challange/${detail_program.id}`}
                />
              </div>
            </div>
            <div className="content mb-5">
              <ProgramDetailComponent
                detailpro={detail_program.detail_program}
              />
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
}

export default DetailProgramPage;
