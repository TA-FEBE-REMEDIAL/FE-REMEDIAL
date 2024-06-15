import React from "react";

function ChallengeInfo(props) {
  // const details = props.details;

  return (
    <div className="box-detailschallenge">
      <div className="border-content-challenge mb-4">
        <h5 className="isi-detailpro">DETAIL CHALLENGE</h5>
        <section dangerouslySetInnerHTML={{ __html: props.desc1 }} />
      </div>
    </div>
  );
}

export default ChallengeInfo;
