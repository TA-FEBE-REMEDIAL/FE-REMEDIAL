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
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ModalComponent = (props) => {
  const { id } = useParams();
  const { getUserData } = useUser();
  const data = getUserData();
  const user = data[0];
  let userEmail;
  if (!user) {
    userEmail = "";
  } else {
    userEmail = user.email;
  }

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [tanggal_penerbit, setTanggalPenerbit] = useState("");
  const [nilai, setNilai] = useState("");
  const [feedback, setFeedback] = useState("");
  const [challenge_id, setChallengeId] = useState(id);
  const [deskripsi, setDeskripsi] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [lampiran, setLampiran] = useState([]);
  const [link, setLink] = useState([""]);

  const [isLinkFilled, setIsLinkFilled] = useState(false);
  const [isLampiranFilled, setIsLampiranFilled] = useState(false);

  const [preview, setPreview] = useState("");

  const [image_url, setImage] = useState("");
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(image));
    }
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

  // useEffect(() => {

  // })
  // add data karya
  const addKarya = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kategori", kategori);
    formData.append("judul", judul);
    formData.append("author", author);
    formData.append("tanggal_penerbit", tanggal_penerbit);
    formData.append("image_url", image_url);
    formData.append("deskripsi", deskripsi);
    formData.append("nilai", nilai);
    formData.append("feedback", feedback);
    formData.append("challenge_id", challenge_id);
    formData.append("email", email);
    lampiran.forEach((file, index) => {
      console.log(file);
      return formData.append(`lampiran`, file);
    });
    // formData.append("lampiran", lampiran);
    formData.append("link", link);
    try {
      Swal.fire({
        title: "Apakah anda yakin untuk menyelesaikan challenge ini?",
        text: "Jika sudah submit, Anda tidak bisa mengubah file pendukung!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d05d5d",
        cancelButtonColor: "#b0a9a9",
        confirmButtonText: "Kirim",
      }).then(async (result) => {
        try {
          if (result.isConfirmed) {
            await axios.post("http://localhost:5000/api/karya", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });

            Swal.fire({
              title: "Good Job!",
              text: "Kamu udah berhasil menyelesaikan challenge proyek ini!",
              icon: "success",
              confirmButtonColor: "#d05d5d",
            }).then(() => {
              // window.location.reload();
              navigate("/karya-siswa");
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Input Failed",
            text: `${error.response.data.message}`,
            icon: "error",
          }).then(() => {
            // window.location.reload();
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Input Failed",
        text: `${error.response.data.message}`,
        icon: "error",
      }).then(() => {
        // window.location.reload();
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
                  preview={preview}
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
                  <LinkComponent
                    data={link}
                    setData={setLink}
                    setIsLinkFilled={setIsLinkFilled}
                    isLampiranFilled={isLampiranFilled}
                  />
                  <LampiranComponent
                    data={lampiran}
                    setData={setLampiran}
                    setIsLampiranFilled={setIsLampiranFilled}
                    isLinkFilled={isLinkFilled}
                  />
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
