import React from "react";

function ArtikelKomentar() {
  return (
    <section>
      <div id="blog"></div>

      <div className="container my-4 col-10">
        <h5 className="fw-bold my-4">Tinggalkan komentar</h5>
        <form className=" container comment-form">
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Komentar:
            </label>
            <textarea
              id="comment"
              placeholder="Komentar"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nama"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="save-info"
              className="form-check-input"
            />
            <label htmlFor="save-info" className="form-check-label">
              Simpan nama, email, saya pada peramban ini untuk komentar
              berikutnya.
            </label>
          </div>
          <button type="submit" className="btn btn-danger mb-4">
            Kirim Komentar
          </button>
        </form>
      </div>
    </section>
  );
}

export default ArtikelKomentar;
