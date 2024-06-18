import React, { useEffect, useState, u } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ArtikelKomentar() {
  const { id } = useParams();

  const [listKomentar, setListkomentar] = useState([]);

  const [nama, setNama] = useState("");
  const [komentar, setKomentar] = useState("");
  const [email, setEmail] = useState("");

  const getKomentar = async () => {
    const url = `http://localhost:5000/api/komentar/${id}`;
    const response = await axios.get(url);
    setListkomentar(response.data);
  };

  useEffect(() => {
    getKomentar();
  }, []);

  // add data
  const addKomentar = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:5000/api/komentar/${id}`, {
          nama,
          komentar,
          email,
        })
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Komentar Gagal!",
        text: `${error.response.data.message}`,
        icon: "error",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const formatDateTime = (dateStr) => {
    const dateObj = new Date(dateStr);
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(dateObj);
  };

  return (
    <section>
      <div id="blog"></div>

      <div className="container my-4 col-10">
        <h5 className="fw-bold my-4">Tinggalkan komentar</h5>
        <form className=" container comment-form" onSubmit={addKomentar}>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Komentar:
            </label>
            <textarea
              value={komentar}
              onChange={(e) => setKomentar(e.target.value)}
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
              value={nama}
              onChange={(e) => setNama(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      <div className="mt-5">
        {listKomentar.map((data, index) => (
          <>
            <div className="list-komentar">
              <div className="container" key={index}>
                <div>
                  <h4 className="fw-semibold">{data.nama}</h4>
                  <small>{formatDateTime(data.date)}</small>
                  <p>{data.komentar}</p>
                </div>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </section>
  );
}

export default ArtikelKomentar;
