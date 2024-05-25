import React from "react";

function ButtonComponent(props) {
  return (
    <div className="registration">
      <button>{props.name}</button>
    </div>
  );
}

export default ButtonComponent;
