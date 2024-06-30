import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function LampiranComponent({
  data,
  setData,
  setIsLampiranFilled,
  isLinkFilled,
}) {
  const [files, setFiles] = useState(data.length ? data : [""]);
  const [showRemoveButtons, setShowRemoveButtons] = useState([false]); // Mengubah nilai awal untuk tombol hapus

  useEffect(() => {
    const hasFile = files.some((file) => file);
    setIsLampiranFilled(hasFile);
  }, [files, setIsLampiranFilled]);

  const handleFileChange = (e, index) => {
    const newFiles = Array.from(e.target.files);
    const updatedFiles = files.slice();
    updatedFiles[index] = newFiles[0];
    setFiles(updatedFiles);
    setData(updatedFiles);
  };

  const handleRemoveFile = (indexToRemove) => {
    const newFiles = files.filter((_, i) => i !== indexToRemove);
    const newShowRemoveButtons = showRemoveButtons.filter(
      (_, i) => i !== indexToRemove
    );
    setFiles(newFiles);
    setData(newFiles);
    setShowRemoveButtons(newShowRemoveButtons);
  };

  const handleAddFileInput = () => {
    setFiles([...files, ""]);
    setData([...files, ""]);
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
                    name="lampiran"
                    disabled={isLinkFilled}
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
              disabled={isLinkFilled}
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
