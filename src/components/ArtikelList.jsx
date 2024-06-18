import React from "react";
import CardArtikel from "./CardArtikel";
import { Link } from "react-router-dom";

function ArtikelList(props) {
  const artikelType = props.data;
  return (
    <div className="row">
      {artikelType.map((data, index) => (
        <Link to={`/artikel/detail-artikel/${data.id}`}>
          <CardArtikel key={index} data={data} />
        </Link>
      ))}
    </div>
  );
}

export default ArtikelList;
