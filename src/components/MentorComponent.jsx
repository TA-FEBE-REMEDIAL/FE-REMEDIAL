import React from "react";
import { mentors } from "../data/mentor";
import ModalComponent from "./ModalComponent";

function MentorComponent(props) {
  return (
    <div className="mentor-container">
      <h3>Mentor</h3>
      {props.mentors.map((mentor, index) => (
        <div key={index} className="mentor">
          <img src="https://via.placeholder.com/150" alt={mentor} />
          <p>{mentor}</p>
        </div>
      ))}
      <ModalComponent btn="Unggah Proyek" title="Unggah Proyek" body="form" />
      {/* <button className="upload-button">Unggah Projek</button> */}
    </div>
  );
}

export default MentorComponent;
