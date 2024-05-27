import React from "react";
import { Row, Col } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";

function JumbrotonComponent(props) {
  return (
    <section id="jumbroton">
      <div className="jumbroton-content">
        <Row>
          <Col>
            <h2 className="fw-bold mt-5">{props.title}</h2>
            <p className="m-0  opacity-50">{props.kategori}</p>
            <p className="mt-3">{props.deskrip}</p>
            <ButtonComponent
              name={props.name}
              hide={props.hide}
              to={props.to}
            />

            {/* <NavLink className={props.hide} to={""}>
              <button className="btn btn-danger rounded-1 btn-lg mt-3">
                Gabung Program
              </button>
            </NavLink> */}
          </Col>
          <Col>
            <img src={props.img} alt="" />
          </Col>
        </Row>
      </div>
      <div className="mt-5">
        <hr className={props.hr} />
      </div>
    </section>
  );
}

export default JumbrotonComponent;
