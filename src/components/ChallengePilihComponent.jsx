import React from "react";
import Card from "react-bootstrap/Card";
import img1challenge from "../assets/img/challenge/3.png";
import ButtonComponent from "./ButtonComponent";

function ChallengePilihComponent() {
  return (
    <div>
      <h3 className="fw-bold"> Challenge terpilih</h3>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-start align-items-center">
            <img src={img1challenge} className="w-25" alt="" />
            <div className="px-5 ">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <ButtonComponent name="Lanjutkan Challenge" to="" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChallengePilihComponent;
