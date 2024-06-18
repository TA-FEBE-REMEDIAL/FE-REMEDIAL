import ListKaryaComponent from "../components/ListKaryaComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";

const KaryaPage = () => {
  const [karya, setKarya] = useState([]);

  const getKarya = async () => {
    const url = "http://localhost:5000/api/karya/";
    const response = await axios.get(url);
    setKarya(response.data.data);
  };
  useEffect(() => {
    getKarya();
  }, []);

  return (
    <>
      <NavbarComponent />
      <section className="container" style={{ paddingTop: "7rem" }}>
        <div className="row py-4">
          <h2 className="mt-3 fw-bold">Karya Siswa</h2>
          <h6 className="">
            Berbagai macam-macam karya seni yang di buat oleh beberapa siswa
          </h6>
          <hr />
          <br />
          <ListKaryaComponent data={karya} />
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default KaryaPage;
