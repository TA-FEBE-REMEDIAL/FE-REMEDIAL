import React from "react";

function ArtikelKomentar() {
  return (
    <section>
      <div id="blog"></div>

      <div class="container-fluid my-4 col-11">
        <div class="card">
          <h5 class="card-title m-3 fw-bold">Komentar</h5>
          <div class="comment comment-new flex justify-content-lg-start">
            <div class="flex-1">
              <form action="#" class="comment-form d-flex align-items-center">
                <textarea
                  placeholder="Add a comment"
                  class="comment-input col-6 mx-3 mb-3 p-3"
                ></textarea>
                <input
                  type="submit"
                  class="comment-submit mb-3"
                  value="Reply"
                />
              </form>
            </div>
            <div class="comments">
              <div class="comment flex items-start justify-start">
                <div class="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtikelKomentar;
