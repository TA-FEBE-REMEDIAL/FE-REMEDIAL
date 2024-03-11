import React from "react";
import CardArtikel from "./CardArtikel";
import { Link } from "react-router-dom";

function ArtikelList() {
  return (
    <div className="row">
      <Link to={"/Artikel"}>
        <CardArtikel />
      </Link>
    </div>
  );
}

export default ArtikelList;
