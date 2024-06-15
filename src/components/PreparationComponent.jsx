import React from "react";

function PreparationComponent(props) {
  return (
    <div className="border-content">
      <section dangerouslySetInnerHTML={{ __html: props.desc2 }} />
    </div>
  );
}

export default PreparationComponent;
