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
      {/* <Link to={ `artikel/detail-artikel/${data.id}`}>
        <CardArtikel
          key={index}
          img={img1artikel}
          title={data.title}
          category={data.kategori}
          author={data.author}
          desc={"lorem"}
          date={data.date}
        />
      </Link> */}
    </div>
  );
}

export default ArtikelList;
