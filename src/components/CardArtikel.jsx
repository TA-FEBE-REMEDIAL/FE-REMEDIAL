import React from "react";

function CardArtikel(props) {
  return (
    <div className="row">
      <main>
        <div className="card mb-3 text-black">
          <div className="row g-0">
            <div className="col-md-9">
              <div className="card-body">
                <div className="entry-meta d-flex align-items-center">
                  <p className="category me-4">{props.category}</p>
                  <p>{props.author}</p>
                </div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <small className="text-body-secondary">{props.date}</small>
              </div>
            </div>
            <div className="col-md-3 p-2 d-flex">
              <img
                src={props.img}
                style={{ height: 180, width: 500 }}
                alt=""
                className="img-fluid rounded float-start"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CardArtikel;
