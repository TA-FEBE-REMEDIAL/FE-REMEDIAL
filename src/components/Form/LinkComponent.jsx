import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function LinkComponent() {
  const [links, setLinks] = useState([""]);

  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleRemoveLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  const handleLinkChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index] = event.target.value;
    setLinks(newLinks);
  };

  return (
    <div className="container mt-4">
      <Form.Group controlId="formLinks" className="mb-3">
        <Row className="align-items-start">
          <Col xs={2}>
            <Form.Label>Link</Form.Label>
          </Col>
          <Col xs={10}>
            {links.map((link, index) => (
              <div key={index} className="mb-2 d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder="Masukkan link (contoh: https://remedial.id/)"
                  value={link}
                  onChange={(e) => handleLinkChange(index, e)}
                  className="me-2"
                />
                {index > 0 && (
                  <Button
                    variant="link"
                    className="text-danger"
                    onClick={() => handleRemoveLink(index)}
                  >
                    Hapus
                  </Button>
                )}
              </div>
            ))}
            <Button
              variant="link"
              className="text-danger mt-n1" // Adjust the margin-top to move the button up
              onClick={handleAddLink}
            >
              Tambah Link
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}

export default LinkComponent;
