import React, { useState } from "react";

function CardArtikel({ data }) {
  const rawDesc = data.isi_artikel;

  // Fungsi untuk membatasi panjang teks hingga 30 karakter
  const limitTextLength = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
  };

  const desc = limitTextLength(rawDesc, 300);

  return (
    <div className="row">
      <main>
        <div className="artikel-card">
          <div className="card mb-3 text-black">
            <div className="row g-0">
              <div className="col-md-9">
                <div className="card-body">
                  <div className="entry-meta d-flex align-items-center">
                    <p className="category me-4">{data.kategori}</p>
                    <p>{data.author}</p>
                  </div>
                  <h5 className="card-title ">{data.title}</h5>
                  {/* <p className="card-text">{desc}</p> */}
                  <section
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                  <small className="text-body-secondary">{data.date}</small>
                </div>
              </div>
              <div className="col-md-3 p-2 d-flex">
                <img
                  src={data.image_url}
                  style={{ height: 180, width: 500 }}
                  alt=""
                  className="img-fluid rounded float-start"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CardArtikel;
