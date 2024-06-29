import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function ImgInputComponent(props) {
  const image = props.data;
  const preview = props.preview;
  const hClearImage = props.hClearImage;

  const handleClearImage = (e) => {
    e.preventDefault(); // Menghentikan aksi default dari tombol "x"
    hClearImage();
  };
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Gambar Proyek</Form.Label>
      <p className="text-muted">
        <small>
          Silahkan upload file gambar sebagai cover atau thumbnail proyek ini
          nantinya
        </small>
      </p>

      <div className="upload-input-container">
        <div
          className="upload-input-box"
          onDrop={props.hDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {image ? (
            <div className="image-preview-container">
              <img
                src={preview ? preview : image}
                style={{
                  maxWidth: "300px", // Atur lebar maksimum
                  maxHeight: "250px", // Atur tinggi maksimum
                  borderRadius: "10px",
                }}
                alt="Upload preview"
                className="preview-input-image"
              />
              {}
              <button className="clear-input-button" onClick={handleClearImage}>
                ×
              </button>
            </div>
          ) : (
            <>
              <div className="isi-upload-input">
                <p>Drag and Drop here</p>
                <p>or</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={props.hImageChange}
                  className="file-upload-input"
                />
                <button className="upload-input-button">Select File</button>
              </div>
            </>
          )}
        </div>
      </div>
    </Form.Group>
  );
}

export default ImgInputComponent;
