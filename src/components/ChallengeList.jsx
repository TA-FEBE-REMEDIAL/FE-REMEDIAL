import React from "react";
import ChallengeCard from "./ChallengeCard";

function ChallengeList() {
  const challenges = [1, 2, 3, 4, 5]; // Example array to simulate multiple challenges

  return (
    <div className="challenge-list">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          titlechallenge="Challenge Remedial - Flash Fiction Contest "
          subtitle="Kuota Peserta"
          roll="👥 0/25"
          to="/program/detail-program/pilih-challange/challenge-terpilih"
        />
      ))}
    </div>
  );
}

export default ChallengeList;
