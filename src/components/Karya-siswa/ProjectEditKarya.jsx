import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import LampiranComponent from "../Form/LampiranComponent";
import LinkComponent from "../Form/LinkComponent";
import ImgInputComponent from "../Form/ImgInputComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

const InputNilaiModal = ({ show, onHide, project }) => {
  // const [formData, setFormData] = useState({ ...project });

  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [tanggal_penerbit, setTanggalPenerbit] = useState("");
  const [nilai, setNilai] = useState("");
  const [feedback, setFeedback] = useState("");
  const [challenge_id, setChallengeId] = useState(id);
  const [deskripsi, setDeskripsi] = useState("");
  const [email, setEmail] = useState(user.email);

  const [image_url, setImage] = useState("");
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(image));
    }
  };

  const [currentItem, setCurrentItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setCurrentItem({ ...item });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Implement the submit function here
    console.log("Updated project:", formData);
    onHide();
  };

  // edit karya siswa
  const editKarya = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kategori", currentItem.kategori);
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
    formData.append("id", currentItem.id);
    try {
      await axios.put("http://localhost:5000/api/karya", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: "berhasil!",
        text: "Data berhasil diubah!",
        icon: "success",
      }).then(() => {
        // window.location.reload();
        navigate("/karya-siswa");
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
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={editKarya}>
          <Form.Group controlId="formTitle">
            <Form.Label>Judul Proyek</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={currentItem.judul}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={currentItem.kategori}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={currentItem.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Tanggal Penerbit</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={currentItem.tanggal_penerbit}
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Form.Group controlId="formImage">
            <Form.Label>Gambar Proyek</Form.Label>
            <ImgInputComponent
              data={image_url}
              preview={preview}
              hDrop={handleDrop}
              hClearImage={handleClearImage}
              hImageChange={handleImageChange}
            />
          </Form.Group> */}
          <Form.Group controlId="formPoem">
            <Form.Label>Isi Karya (Puisi)</Form.Label>
            <Form.Control
              as="textarea"
              name="poem"
              value={currentItem.deskripsi}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formReviewScore">
            <Form.Label>Nilai Review Mentor</Form.Label>
            <Form.Control
              type="number"
              name="reviewScore"
              value={currentItem.nilai}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <hr />
        <div className="Link-form">
          <h5 className="fw-bold">Link Pendukung</h5>
          <LinkComponent />
          <LampiranComponent />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Tutup
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          Simpan Perubahan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InputNilaiModal;
