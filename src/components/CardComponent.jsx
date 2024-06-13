import React from "react";
import img1kelas from "../assets/img/kelas/1.png";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";

function CardComponent(props) {
  return (
    <div className="cardColumn">
      <Card className="mx-2 card-pro">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="fw-bold">{props.title}</Card.Title>
          <Card.Text className="text-sm text-muted">{props.category}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text>Gratis</Card.Text>
          <NavLink to={props.to}>
            <div className={props.block}>
              <button className={`details-button`}>Lihat Detail</button>
            </div>
          </NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardComponent;
