import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import LampiranComponent from "../Form/LampiranComponent";
import LinkComponent from "../Form/LinkComponent";

const InputNilaiModal = ({ show, onHide, project }) => {
  const [formData, setFormData] = useState({ ...project });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Implement the submit function here
    console.log("Updated project:", formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Judul Proyek</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Tanggal Penerbit</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Gambar Proyek</Form.Label>
            <Form.Control
              type="file"
              // name="image"
              // value={formData.image}
              // onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPoem">
            <Form.Label>Isi Karya (Puisi)</Form.Label>
            <Form.Control
              as="textarea"
              name="poem"
              value={formData.poem}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formReviewScore">
            <Form.Label>Nilai Review Mentor</Form.Label>
            <Form.Control
              type="number"
              name="reviewScore"
              value={formData.reviewScore}
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
