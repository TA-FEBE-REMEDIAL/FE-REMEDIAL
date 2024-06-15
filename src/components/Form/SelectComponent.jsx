import React from "react";
import Form from "react-bootstrap/Form";

function SelectComponent(props) {
  const kategori = props.data;
  // console.log(kategori);
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Kategori</Form.Label>
        <p className="text-muted">
          <small>Masukkan kategori proyek anda</small>
        </p>
        <Form.Select
          value={props.value}
          onChange={props.change}
          aria-label="Default select example"
        >
          <option value={""} disabled>
            Pilih Kategori
          </option>

          {kategori.map((data, index) => (
            <option key={index} value={data.value}>
              {data.text}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export default SelectComponent;
