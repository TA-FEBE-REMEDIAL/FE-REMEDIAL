import React from "react";
import Form from "react-bootstrap/Form";

function TextareaComponent(props) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deskripsi Proyek</Form.Label>
          <p className="text-muted">
            <small>
              Silahkan tulis deskripsi proyek yang ingin kamu kirim. Kamu dapat
              menceritakan mengenai metode, ide, solusi, proses pemecahan
              masalah dan refleksi hasil yang didapatkan dari menggerjakan tugas
              tersebut
            </small>
          </p>
          <Form.Control
            value={props.value}
            onChange={props.change}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form.Group>
      <hr />
    </div>
  );
}

export default TextareaComponent;
