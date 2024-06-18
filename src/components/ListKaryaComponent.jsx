import React from "react";
import { NavLink } from "react-router-dom";

function ListKaryaComponent(props) {
  const karya = props.data;

  return (
    <>
      {karya.map((data, index) => (
        <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
          <NavLink key={index} to={`/karya-siswa/detail-karyasiswa/${data.id}`}>
            <div className="card" style={{ height: "250px", width: "100%" }}>
              <img
                src={data.image_url}
                className="card-img card-img-overlay"
                style={{ height: "100%" }}
                alt="..."
              />
              <div className="card-img-overlay ">
                <div className="wrap-content isi-konten">
                  <h5 className="card-category">{data.kategori}</h5>
                  <p className="card-title">{data.judul}</p>
                  {/* <p className="card-text">
                  <small>July 24, 2019</small>
                </p> */}
                  {/* <div className="entry-meta d-flex align-items-center">
                    <p className="category me-4">{data.author}</p>
                    <small className="text-body-secondary">
                      {data.tanggal_penerbit}
                    </small>
                  </div> */}
                  <div className="entry-meta d-flex align-items-center">
                    <small className="category me-4">
                      {data.tanggal_penerbit}
                    </small>
                    <small>{data.author}</small>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
}

export default ListKaryaComponent;
