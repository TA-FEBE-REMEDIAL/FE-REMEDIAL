import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";

function ProgramComponent() {
  return (
    <div className="program">
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <div>
                <h1 className="fw-bold">
                  Pilih Program <span>untuk Kamu</span>
                </h1>
                <p>
                  Selain kelas, Remedial memiliki program dan challenge yang
                  menarik untuk kamu ikuti.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Slider />
        </Row>
      </Container>
    </div>
  );
}

export default ProgramComponent;
