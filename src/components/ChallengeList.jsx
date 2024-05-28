import React from "react";
import ChallengeCard from "./ChallengeCard";
import data from "../data/detailchallenge";
import { useParams } from "react-router-dom";

function ChallengeList() {
  const challenges = [data]; // Example array to simulate multiple challenges

  return (
    <div className="challenge-list">
      {challenges[0].map((challenge, index) => (
        <ChallengeCard
          key={index}
          titlechallenge={challenge.title1_challenge}
          subtitle="Kuota Peserta"
          roll="👥 0/25"
          to={`/program/detail-program/pilih-challange/challenge-terpilih/detail-challenge/${challenge.id}`}
          to2={`/program/detail-program/pilih-challange/challenge-terpilih/${challenge.id}`}
        />
      ))}
    </div>
  );
}

export default ChallengeList;
