import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputComponent from "./Form/InputComponent";
import SelectComponent from "./Form/SelectComponent";
import { Col, Row } from "react-bootstrap";
import ImgInputComponent from "./Form/ImgInputComponent";
import TextareaComponent from "./Form/TextareaComponent";
import LinkComponent from "./Form/LinkComponent";
import LampiranComponent from "./Form/LampiranComponent";
import FooterComponent from "./Form/FooterComponent";

const ModalComponent = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [karya, setKarya] = useState([]);

  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [tanggal_penerbit, setTanggalPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const [image_url, setImage] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  const handleClearImage = () => {
    setImage(null);
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

  // useEffect(() => {

  // })

  // add data
  const addKarya = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/karya", {
        kategori,
        judul,
        author,
        tanggal_penerbit,
        image_url,
        deskripsi,
      });
      Swal.fire({
        title: "Good Job!",
        text: " Kamu udah berhasil menyelesaikan challenge proyek ini!",
        icon: "success",
      }).then(() => {
        window.location.reload();
        // Navigate("/karya-siswa")
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Input Failed",
        text: `${error.response.data.message}`,
        icon: "error",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div>
      {" "}
      <div className="d-grid gap-2s">
        <Button className="btn-danger" onClick={handleShow}>
          {props.btn}
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.body === "form" ? (
            <Form onSubmit={addKarya}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <InputComponent
                  value={judul}
                  change={(e) => setJudul(e.target.value)}
                  label="Nama Proyek"
                  type="text"
                  desc="Tuliskan nama proyek yang ingin kamu kirim berdasarkan solusi dari tugas proyek yang telah diselesaikan. Penulisan nama dapat berupa nama proyek  atau nama halaman yang dibuat, dan lainnya yang mendeskripsikan karyamu. Sebagai contoh  “Puisi Tidur Joko Pinurbo atau Pameran All You(th) Need is Art.”"
                  holder="Masukkan Nama Proyek"
                  show="d-block"
                />
                <Row>
                  <Col>
                    <SelectComponent
                      data={selectKategori}
                      value={kategori}
                      change={(e) => setKategori(e.target.value)}
                    />
                  </Col>
                  <Col>
                    {" "}
                    <InputComponent
                      value={tanggal_penerbit}
                      change={(e) => setTanggalPenerbit(e.target.value)}
                      label="Tanggal Upload"
                      type="date"
                      desc="Tuliskan kapan tanggal penerbitan  proyek tersebut"
                      holder="dd-mm-yyyy"
                      show="d-block"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <InputComponent
                      value={author}
                      change={(e) => setAuthor(e.target.value)}
                      label="Nama Penerbit"
                      type="text"
                      desc="Tulis nama kamu atau nama grup kelompokmu"
                      holder="Masukkan Nama Anda"
                    />
                  </Col>
                  <Col></Col>
                </Row>
                <ImgInputComponent
                  data={image_url}
                  hDrop={handleDrop}
                  hClearImage={handleClearImage}
                  hImageChange={handleImageChange}
                />
                <TextareaComponent
                  value={deskripsi}
                  change={(e) => setDeskripsi(e.target.value)}
                />
                <div className="Link-form">
                  <h5 className="fw-bold">Link Pendukung</h5>
                  <LinkComponent />
                  <LampiranComponent />
                  <div className="text-muted">
                    <FooterComponent
                      label1="Dengan mencentang kotak ini, kamu menyetujui untuk mengirimkan hasil pekerjaan proyek dan menyelesaikan Inovasi Digital Seni ini."
                      btnform="Selesaikan Proyek"
                    />
                  </div>
                </div>
              </Form.Group>
            </Form>
          ) : (
            <p>{props.body}</p>
          )}
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalComponent;
