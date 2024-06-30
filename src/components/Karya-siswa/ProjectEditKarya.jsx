import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import LampiranComponent from "../Form/LampiranComponent";
import LinkComponent from "../Form/LinkComponent";
import ImgInputComponent from "../Form/ImgInputComponent";
import SelectComponent from "../Form/SelectComponent";

const InputNilaiModal = ({ show, onHide, project, isMentor }) => {
  const karya = project.data;

  const [currentItem, setCurrentItem] = useState(karya);
  const [preview, setPreview] = useState("");

  const [lampiran, setLampiran] = useState([]);
  const [link, setLink] = useState([""]);
  const [kategori, setKategori] = useState("");
  const [image_url, setImage] = useState("");
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(image));
    }
  };

  const [isLinkFilled, setIsLinkFilled] = useState(false);
  const [isLampiranFilled, setIsLampiranFilled] = useState(false);

  // edit karya
  const editKarya = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kategori", !kategori ? currentItem.kategori : kategori);
    formData.append("judul", currentItem.judul);
    formData.append("author", currentItem.author);
    formData.append("tanggal_penerbit", currentItem.tanggal_penerbit);
    formData.append(
      "image_url",
      image_url === "" ? currentItem.image_url : image_url
    );
    formData.append("deskripsi", currentItem.deskripsi);
    formData.append("nilai", currentItem.nilai);
    formData.append("feedback", currentItem.feedback);
    formData.append("challenge_id", currentItem.challenge_id);
    formData.append("email", currentItem.email);
    // lampiran.forEach((file, index) => {
    //   console.log(file);
    //   return formData.append(`lampiran`, file);
    // });
    // formData.append("lampiran", lampiran);
    // formData.append("link", link);
    formData.append("id", currentItem.id);

    try {
      const url = `http://localhost:5000/api/karya/${currentItem.id}`;
      await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: "Edit Data Karya Berhasil!",
        text: "Berhasil edit data karya!",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Gagal edit barang!",
        text: `Gagal karena ${error.response.data.message}`,
        icon: "error",
      }).then(() => {
        // window.location.reload();
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const image = e.dataTransfer.files[0];
    setImage(image);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPreview(URL.createObjectURL(image));
    }
  };

  const handleClearImage = () => {
    setImage("");
  };

  const selectKategori = [
    {
      value: "puisi",
      text: "Puisi",
    },
    {
      value: "cerpen",
      text: "Cerpen",
    },
    {
      value: "drama",
      text: "Drama",
    },
    {
      value: "dongeng",
      text: "Dongeng",
    },
    {
      value: "musik",
      text: "Musik",
    },
    {
      value: "komik",
      text: "Komik",
    },
    {
      value: "lainnya",
      text: "Lainnya",
    },
  ];

  const linkSON = karya.link ? JSON.parse(karya.link) : [];
  const lampiranJSON = karya.lampiran ? JSON.parse(karya.lampiran) : [];

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={editKarya}>
          {isMentor ? (
            <>
              <Form.Group controlId="formReviewScore">
                <Form.Label>Nilai Review Mentor</Form.Label>
                <Form.Control
                  type="number"
                  name="nilai"
                  value={currentItem.nilai}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFeedback">
                <Form.Label>Feedback Mentor</Form.Label>
                <Form.Control
                  as="textarea"
                  name="feedback"
                  value={currentItem.feedback}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group controlId="formTitle">
                <Form.Label>Judul Proyek</Form.Label>
                <Form.Control
                  type="text"
                  name="judul"
                  value={currentItem.judul}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Kategori</Form.Label>

                <Form.Select
                  value={!kategori ? currentItem.kategori : kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  aria-label="Default select example"
                >
                  <option value={""} disabled>
                    Pilih Kategori
                  </option>

                  {selectKategori.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Nama Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={currentItem.author}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDate" className="my-3">
                <Form.Label>Tanggal Penerbit</Form.Label>
                <Form.Control
                  type="date"
                  name="tanggal_penerbit"
                  value={currentItem.tanggal_penerbit}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Gambar Proyek</Form.Label>
                <p className="text-muted">
                  <small>
                    Silahkan upload file gambar sebagai cover atau thumbnail
                    proyek ini nantinya
                  </small>
                </p>

                <div className="upload-input-container">
                  <div
                    className="upload-input-box"
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    {currentItem.image_url || image_url ? (
                      <>
                        <div className="image-preview-container">
                          <img
                            src={preview ? preview : currentItem.image_url}
                            style={{
                              maxWidth: "300px", // Atur lebar maksimum
                              maxHeight: "250px", // Atur tinggi maksimum
                              borderRadius: "10px",
                            }}
                            alt="Upload preview"
                            className="preview-input-image"
                          />
                          <button
                            className="clear-input-button"
                            onClick={handleClearImage}
                            type="button"
                          >
                            ×
                          </button>
                        </div>
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            name="image_url"
                            className="file-upload-input"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="isi-upload-input">
                          <p>Drag and Drop here</p>
                          <p>or</p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            name="image_url"
                            className="file-upload-input"
                          />
                          <button className="upload-input-button">
                            Select File
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Form.Group>

              <Form.Group controlId="formPoem">
                <Form.Label>Isi Karya (Puisi)</Form.Label>
                <Form.Control
                  as="textarea"
                  name="deskripsi"
                  value={currentItem.deskripsi}
                  onChange={handleChange}
                />
              </Form.Group>

              <hr />
              <div className="Link-form d-none">
                <h5 className="fw-bold">Link Pendukung</h5>
                <LinkComponent
                  data={linkSON}
                  setData={setLink}
                  setIsLinkFilled={setIsLinkFilled}
                  isLampiranFilled={isLampiranFilled}
                />
                <LampiranComponent
                  data={lampiranJSON}
                  setData={setLampiran}
                  isEdit={true}
                  setIsLampiranFilled={setIsLampiranFilled}
                  isLinkFilled={isLinkFilled}
                />
              </div>
            </>
          )}

          <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>
              Tutup
            </Button>
            <Button variant="danger" type="submit">
              Simpan Perubahan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InputNilaiModal;
