import React from "react";

function ChallengeInfo(props) {
  const details = props.details;
  console.log(details);
  return (
    <div className="box-detailschallenge">
      <div className="border-content-challenge mb-4">
        <h5 className="isi-detailpro">DETAIL CHALLENGE</h5>
        <h1 id="detail-challenge">{props.title}</h1>
        <div className="container">
          <p>{props.desc1}</p>
          <p>Detail Challenge</p>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <p>{props.desc_end}</p>
        </div>
      </div>
    </div>
  );
}

export default ChallengeInfo;
