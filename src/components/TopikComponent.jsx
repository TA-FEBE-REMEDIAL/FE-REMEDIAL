import React from "react";

function TopikComponent() {
  return (
    <section id="topik" className="d-flex justify-content-center">
      <div className="text-center">
        <div className="row g-2">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="p-3 bg-topik  px-5">Seni Rupa </div>
              <div className="p-3 bg-topik mx-2 px-5">Seni Musik</div>
              <div className="p-3 bg-topik px-5">Seni Sastra</div>
            </div>
          </div>
          <div className="col-12 py-2 ">
            <div className="d-flex justify-content-center">
              <div className=" bg-topik-2 mx-3">Seni Pertunjukan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopikComponent;
