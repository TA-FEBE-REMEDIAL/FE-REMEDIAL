import React from "react";
import img1challenge from "../assets/img/challenge/3.png";
import { NavLink } from "react-router-dom";

function ChallengeCard(props) {
  return (
    <div className="challenge-card">
      <div className="challenge-img">
        <img src={props.img} alt="" className="w-100 mb-5 rounded-top" />
      </div>
      <div className="challenge-title">{props.titlechallenge}</div>
      <div className="challenge-footer">
        <div className="participants">
          <p>{props.subtitle}</p>
          <span role="img" aria-label="participants">
            {props.roll}
          </span>
        </div>
        <div className="d-flex ">
          <NavLink to={props.to}>
            <button className="details-button mt-auto">Lihat Detail</button>
          </NavLink>
          <NavLink to={props.to2}>
            <button className="choose-button mt-auto">Pilih Challenge</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
  z;
}

export default ChallengeCard;
