import React from "react";
import { NavLink } from "react-router-dom";
import img1karya from "../assets/img/karya/1.png";
import img2karya from "../assets/img/karya/2.jpg";
import img3karya from "../assets/img/karya/3.jpg";

function ListKaryaComponent() {
  return (
    <>
      <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
        <NavLink to="/karya-siswa/detail">
          <div className="card" style={{ height: "250px", width: "100%" }}>
            <img
              src={img1karya}
              className="card-img card-img-overlay"
              style={{ height: "100%" }}
              alt="..."
            />
            <div className="card-img-overlay ">
              <div className="wrap-content">
                <h5 className="card-category">lorem</h5>
                <p className="card-title">lorem</p>
                <p className="card-text">
                  <small>rilis 15 juni 2023</small>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
        <NavLink to="/karya-siswa/detail">
          <div className="card" style={{ height: "250px", width: "100%" }}>
            <img
              src={img2karya}
              className="card-img card-img-overlay"
              style={{ height: "100%" }}
              alt="..."
            />
            <div className="card-img-overlay">
              <div className="wrap-content">
                <h5 className="card-category">lorem</h5>
                <p className="card-title">lorem</p>
                <p className="card-text">
                  <small>rilis 15 juni 2023</small>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4">
        <NavLink to="/karya-siswa/detail">
          <div className="card" style={{ height: "250px", width: "100%" }}>
            <img
              src={img3karya}
              className="card-img card-img-overlay"
              style={{ height: "100%" }}
              alt="..."
            />
            <div className="card-img-overlay d-flex flex-column">
              <div className="wrap-content">
                <h5 className="card-category">lorem</h5>
                <p className="card-title">lorem</p>
                <p className="card-text">
                  <small>rilis 15 juni 2023</small>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ListKaryaComponent;
