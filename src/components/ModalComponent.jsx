import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputComponent from "./Form/InputComponent";
import SelectComponent from "./Form/SelectComponent";
import { Col, Row } from "react-bootstrap";
import ImgInputComponent from "./Form/ImgInputComponent";
import TextareaComponent from "./Form/TextareaComponent";

const ModalComponent = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <Button onClick={handleShow}>{props.btn}</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.body === "form" ? (
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <InputComponent
                  label="Nama Proyek"
                  type="text"
                  desc="Tuliskan nama proyek yang ingin kamu kirim berdasarkan solusi dari tugas proyek yang telah diselesaikan. Penulisan nama dapat berupa nama proyek  atau nama halaman yang dibuat, dan lainnya yang mendeskripsikan karyamu. Sebagai contoh  “Puisi Tidur Joko Pinurbo atau Pameran All You(th) Need is Art.”"
                  holder="Masukkan Nama Proyek"
                  show="d-block"
                />
                <Row>
                  <Col>
                    <SelectComponent />
                  </Col>
                  <Col>
                    {" "}
                    <InputComponent
                      label="Tanggal Upload"
                      type="date"
                      desc="Tuliskan kapan tanggal penerbitan  proyek tersebut"
                      holder="dd-mm-yyyy"
                      show="d-block"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <InputComponent
                      label="Nama Penerbit"
                      type="text"
                      desc="Tulis nama kamu atau nama grup kelompokmu"
                      holder="Masukkan Nama Anda"
                    />
                  </Col>
                  <Col></Col>
                </Row>
                <ImgInputComponent />
                <TextareaComponent />
                <InputComponent
                  label="Password:"
                  type="password"
                  holder="Masukkan Password"
                />
              </Form.Group>
            </Form>
          ) : (
            <p>ini bukan form</p>
          )}
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalComponent;
