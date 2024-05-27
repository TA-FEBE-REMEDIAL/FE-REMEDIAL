import React from "react";
import { NavLink } from "react-router-dom";

function ButtonComponent(props) {
  return (
    <div className={`registration ${props.hide}`}>
      <NavLink to={props.to}>
        <button>{props.name}</button>
      </NavLink>
    </div>
  );
}

export default ButtonComponent;
