import React, { useState } from "react";
import img1detkarya from "../assets/img/karya/1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function DetailKaryaComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    title: "Dongeng Pukul 10",
    author: "Azka Guzamir",
    date: "24 Juli 2019",
    text: `dalam malam 
ketika ibu kota tidak lagi bersuara
tinggallah kita berdua 
tersisa dan semakin suram

kita naik bus kota 
dari kuningan
sampai ragunan 
semakin malam, tak lagi ada suara

malam makin merasuk
dingin angin buatan semakin menusuk 
menembus tulang rusuk
menebal dan tak pernah suntuk

dalam malam 
ketika kota dan kata tidak lagi berbicara
tinggallah aku sendiri
mengenang sekian banyak janji caleg dan menteri

terbangun juga aku di selipi
kuningan-ragunan cuman mimpi
kau juga tidak asli
cuma tamu yang datang lalu pergi.`,
    pdfLink: "Project Challenge_Puisi.pdf",
    category: "puisi",
    alignment: "center",
    file: null,
    fileName: "Project Challenge_Puisi.pdf",
    fileLink: "", // New state property for file link
  });

  const handleEditToggle = () => {
    if (isEditing) {
      setContent((prevContent) => ({
        ...prevContent,
        alignment: prevContent.category === "puisi" ? "center" : "left",
      }));
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setContent({ ...content, file, fileName: file.name, fileLink: "" });
    }
  };

  const handleLinkChange = (e) => {
    const { value } = e.target;
    setContent({ ...content, fileLink: value, file: null, fileName: value });
  };

  const isFileUrl = (fileName) => {
    try {
      new URL(fileName);
      return true;
    } catch {
      return false;
    }
  };

  const isDocumentFile = (fileName) => {
    const allowedExtensions = [
      "pdf",
      "jpg",
      "jpeg",
      "png",
      "doc",
      "docx",
      "ppt",
      "pptx",
      "xls",
      "xlsx",
    ];
    const extension = fileName.split(".").pop().toLowerCase();
    return allowedExtensions.includes(extension);
  };

  return (
    <Container className="px-5">
      <section id="detail-karya">
        <Row className="mb-5 pt-5">
          <Col xs={12}>
            {isEditing ? (
              <Form.Control
                type="text"
                value={content.title}
                name="title"
                onChange={handleInputChange}
                className="mb-2"
              />
            ) : (
              <h1>{content.title}</h1>
            )}
            {isEditing ? (
              <>
                <Form.Control
                  type="text"
                  value={content.author}
                  name="author"
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Form.Control
                  type="text"
                  value={content.date}
                  name="date"
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Form.Control
                  as="select"
                  value={content.category}
                  name="category"
                  onChange={handleInputChange}
                  className="mb-2"
                >
                  <option value="puisi">Puisi</option>
                  <option value="prosa">Prosa</option>
                </Form.Control>
              </>
            ) : (
              <p className="m-0 opacity-50">
                Puisi oleh {content.author}, {content.date}
              </p>
            )}
          </Col>
          <Col xs={12} className="img-center py-5 px-0">
            <img
              src={img1detkarya}
              alt=""
              style={{ width: "95%", borderRadius: "5px" }}
            />
          </Col>

          <Col xs={12} className={`text-${content.alignment}`}>
            {isEditing ? (
              <Form.Control
                as="textarea"
                rows={15}
                value={content.text}
                name="text"
                onChange={handleInputChange}
                className="mb-2"
              />
            ) : (
              content.text.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))
            )}
          </Col>

          <div className="pt-3">
            <div className="file-link-container">
              <div className="file-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="#4A4A4A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="file-details">
                {isEditing ? (
                  <>
                    <Form.Control
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                      onChange={handleFileChange}
                      className="mb-2"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Or enter file link"
                      value={content.fileLink}
                      onChange={handleLinkChange}
                      className="mb-2"
                    />
                  </>
                ) : isFileUrl(content.fileName) ? (
                  <>
                    <div className="file-name">
                      <a
                        href={content.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.fileName}
                      </a>
                    </div>
                    <div className="file-type">Link</div>
                  </>
                ) : isDocumentFile(content.fileName) ? (
                  <>
                    <div className="file-name">
                      <a
                        href={
                          content.file ? URL.createObjectURL(content.file) : "#"
                        }
                        download={content.fileName}
                      >
                        {content.fileName}
                      </a>
                    </div>
                    <div className="file-type">Dokumen</div>
                  </>
                ) : (
                  <>
                    <div className="file-name">Tidak ada file yang valid</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <Col xs={12} className="pt-4 mb-5">
            <Button
              onClick={handleEditToggle}
              className="btn btn-outline-danger rounded-1 m-2"
              style={{ transition: "background-color 0.3s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#dc3545")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {isEditing ? "Simpan" : "Edit"}
            </Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default DetailKaryaComponent;
