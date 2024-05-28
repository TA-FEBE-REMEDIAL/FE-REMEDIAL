import React from "react";
import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";

function ChallengePilihComponent(props) {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-start align-items-center">
            <img src={props.img} className="w-25" alt="" />
            <div className="px-5 ">
              <Card.Title className="fw-bold">{props.title1}</Card.Title>
              <div className={props.hidedesc}>
                <Card.Text>{props.deskrip1}</Card.Text>
              </div>
              <div className={props.hide}>
                <ButtonComponent name="Lanjutkan Challenge" to={props.to} />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChallengePilihComponent;
