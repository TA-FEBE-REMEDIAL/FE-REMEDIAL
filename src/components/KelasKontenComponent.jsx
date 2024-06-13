import React from "react";
import { Row, Col } from "react-bootstrap";

function KelasKontenComponent(props) {
  return (
    <div>
      <Row className="pt-5 ">
        <Col xs={8}>
          <section dangerouslySetInnerHTML={{ __html: props.materi }} />
        </Col>

        <Col xs={4}>
          <section dangerouslySetInnerHTML={{ __html: props.video }} />
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default KelasKontenComponent;
