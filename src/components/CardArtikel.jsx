import React from "react";

function CardArtikel() {
  return (
    <div className="row">
      <main>
        <div className="card mb-3 text-black">
          <div className="row g-0">
            <div className="col-md-9">
              <div className="card-body">
                <div className="entry-meta d-flex align-items-center">
                  <p className="category me-4">lorem 5</p>
                  <p></p>
                </div>
                <h5 className="card-title">lorem lorem</h5>
                <p className="card-text">lorem lorem</p>
                <small className="text-body-secondary">lorem lorem</small>
              </div>
            </div>
            <div className="col-md-3 p-2 d-flex">
              <img src="" alt="" className="img-fluid rounded float-start" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CardArtikel;
