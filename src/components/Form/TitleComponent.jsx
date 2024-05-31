import React from "react";

function TitleComponent(props) {
  return (
    <div>
      <h4 className="fw-bold">{props.title}</h4>
      <p className="text-muted">{props.descrip}</p>
    </div>
  );
}

export default TitleComponent;
