import React from "react";

function ButtonArtikel(props) {
  return (
    <div>
      <button
        onClick={props.click}
        className={`btn rounded-1 btn-lg ${props.type}`}
      >
        {props.title}
      </button>
    </div>
  );
}

export default ButtonArtikel;
