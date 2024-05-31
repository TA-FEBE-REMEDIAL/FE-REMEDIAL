import React from "react";
import { mentors } from "../data/mentor";
import ModalComponent from "./ModalComponent";

function MentorComponent(props) {
  return (
    <div className="mentor-container">
      <h3>Mentor</h3>
      {props.mentors.map((mentor, index) => (
        <div key={index} className="mentor">
          <img src={mentor.imgSrc} alt={mentor.name} />
          <p>{mentor.name}</p>
        </div>
      ))}
      <ModalComponent
        btn="Lihat Selengkapnya"
        title="Unggah Proyek"
        body="form"
      />
      {/* <button className="upload-button">Unggah Projek</button> */}
    </div>
  );
}

export default MentorComponent;
