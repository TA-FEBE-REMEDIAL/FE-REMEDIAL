import React from "react";
import CardArtikel from "./CardArtikel";
import { Link } from "react-router-dom";
import img1artikel from "../assets/img/artikel/berita-seni/1.jpg";

function ArtikelList() {
  return (
    <div className="row">
      <Link to={"/Artikel"}>
        <CardArtikel img={img1artikel} title={"judul"} />
      </Link>
      <Link to={"/Artikel"}>
        <CardArtikel img={img1artikel} />
      </Link>
    </div>
  );
}

export default ArtikelList;
