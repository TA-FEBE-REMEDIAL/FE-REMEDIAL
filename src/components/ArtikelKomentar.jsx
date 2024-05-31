import React from "react";

function ArtikelKomentar() {
  return (
    <section>
      <div id="blog"></div>

      <div className="container-fluid my-4 col-11">
        <div className="card">
          <h5 className="card-title m-3 fw-bold">Komentar</h5>
          <div className="comment comment-new flex justify-content-lg-start">
            <div className="flex-1">
              <form
                action="#"
                className="comment-form d-flex align-items-center"
              >
                <textarea
                  placeholder="Add a comment"
                  className="comment-input col-6 mx-3 mb-3 p-3"
                ></textarea>
                <input
                  type="submit"
                  className="comment-submit mb-3"
                  value="Reply"
                />
              </form>
            </div>
            <div className="comments">
              <div className="comment flex items-start justify-start">
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtikelKomentar;
