import React from "react";
import Form from "react-bootstrap/Form";

function SelectComponent() {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Kategori</Form.Label>
        <p className="text-muted">
          <small>Masukkan kategori proyek anda</small>
        </p>
        <Form.Select aria-label="Default select example">
          <option>Pilih Kategori</option>
          <option value="1">Puisi</option>
          <option value="2">Cerpen</option>
          <option value="3">Drama</option>
          <option value="4">Dongeng</option>
          <option value="5">Musik</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export default SelectComponent;
