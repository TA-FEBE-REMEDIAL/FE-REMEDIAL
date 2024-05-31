import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function ImgInputComponent() {
  const [image, setImage] = useState(null);

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
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {image ? (
            <div className="image-preview-container">
              <img
                src={image}
                alt="Upload preview"
                className="preview-input-image"
              />
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
                  onChange={handleImageChange}
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
