import React from "react";
import ChallengeCard from "./ChallengeCard";

function ChallengeList(props) {
  const challenge = props.data;

  return (
    <div className="challenge-list">
      {challenge.map((data, index) => (
        <ChallengeCard
          key={index}
          titlechallenge={data.title}
          img={data.img_url}
          subtitle="Kuota Peserta"
          roll={`👥 ${data.kuota}/25`}
          to={`/program/detail-program/pilih-challange/challenge-terpilih/detail-challenge/${data.id}`}
          to2={`/program/detail-program/pilih-challange/challenge-terpilih/${data.id}`}
        />
      ))}
    </div>
  );
}

export default ChallengeList;
