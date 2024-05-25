import React from "react";

function NavigationProgramComponent() {
  return (
    <div className="navigation">
      <div>
        <h6>Literary Forge: Program Remedial Seni Sastra</h6>
      </div>
      <div id="list-example" className="list-group">
        <a
          className="list-group-item list-group-item-action"
          href="#detail-program"
        >
          Detail Program
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#metode-pembelajaran"
        >
          Metode Pembelajaran
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#keuntungan-program"
        >
          Keuntungan Program
        </a>
      </div>
    </div>

    // <div className="navigation">
    //   <div>
    //     <h6>Literary Forge: Program Remedial Seni Sastra</h6>
    //   </div>
    //   <ul>
    //     {sections.map((section, index) => (
    //       <li
    //         key={index}
    //         classNameName={selectedSection === section ? "active" : ""}
    //         onClick={() => setSelectedSection(section)}
    //       >
    //         {section}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default NavigationProgramComponent;
