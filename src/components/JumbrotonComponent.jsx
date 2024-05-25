import React from "react";
import { Row, Col, NavLink } from "react-bootstrap";

function JumbrotonComponent(props) {
  return (
    <section id="jumbroton">
      <div className="jumbroton-content">
        <Row>
          <Col>
            <h2 className="fw-bold mt-5">{props.title}</h2>
            <p className="m-0  opacity-50">{props.kategori}</p>
            <p className="mt-3">{props.deskrip}</p>

            <NavLink className={props.hide} to={""}>
              <button className="btn btn-danger rounded-1 btn-lg mt-3">
                Gabung Program
              </button>
            </NavLink>
          </Col>
          <Col>
            <img src={props.img} alt="" />
          </Col>
        </Row>
      </div>
      <hr className={props.hr} />
    </section>
  );
}

export default JumbrotonComponent;
