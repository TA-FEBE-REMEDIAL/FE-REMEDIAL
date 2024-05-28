import React from "react";

function PreparationComponent(props) {
  return (
    <div className="border-content">
      <h1 id="detail-preparation">{props.title}</h1>
      <div className="container">
        <p>{props.desc}</p>
        <ul>
          {props.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PreparationComponent;
