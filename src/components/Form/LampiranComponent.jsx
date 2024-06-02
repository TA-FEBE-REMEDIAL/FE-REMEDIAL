import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function LampiranComponent() {
  const [files, setFiles] = useState([""]);
  const [showRemoveButtons, setShowRemoveButtons] = useState([false]); // Mengubah nilai awal untuk tombol hapus

  const handleFileChange = (e, index) => {
    const newFiles = Array.from(e.target.files);
    const updatedFiles = files.slice();
    updatedFiles[index] = newFiles[0];
    setFiles(updatedFiles);
  };

  const handleRemoveFile = (indexToRemove) => {
    const newFiles = files.filter((_, i) => i !== indexToRemove);
    const newShowRemoveButtons = showRemoveButtons.filter(
      (_, i) => i !== indexToRemove
    );
    setFiles(newFiles);
    setShowRemoveButtons(newShowRemoveButtons);
  };

  const handleAddFileInput = () => {
    setFiles([...files, ""]);
    setShowRemoveButtons([...showRemoveButtons, true]); // Mengubah nilai menjadi true untuk input baru yang ditambahkan
  };

  return (
    <div className="container mt-3">
      <Form.Group controlId="formFile" className="mb-3">
        <Row className="align-items-start">
          <Col xs={2}>
            <Form.Label>Lampiran</Form.Label>
          </Col>
          <Col xs={10}>
            {files.map((file, index) => (
              <div key={index} className="mb-2">
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="file"
                    onChange={(e) => handleFileChange(e, index)}
                    className="me-2"
                  />
                  {showRemoveButtons[index] && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFile(index)}
                    >
                      Hapus
                    </Button>
                  )}
                </div>
              </div>
            ))}
            <Form.Text className="text-muted">
              pdf, jpg, png, doc, docx, ppt, pptx, xls, xlsx, jpeg (maxsize: 2
              MB)
            </Form.Text>
            <Button
              variant="link"
              className="text-danger mt-2"
              onClick={handleAddFileInput}
            >
              Tambah Lampiran
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}

export default LampiranComponent;
