import React from "react";

function ArtikelKonten({ data }) {
  return (
    <div>
      <div className="col-10 col-lg-12">
        <div className="row justify-content-center">
          <div className=" col-md-12 col-lg-8 col-xl-10 col-xxl-9">
            <section dangerouslySetInnerHTML={{ __html: data.isi_artikel }} />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtikelKonten;
