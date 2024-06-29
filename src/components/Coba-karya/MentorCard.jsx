import React from "react";

export default function MentorCard({
  title,
  score,
  feedback,
  documentName,
  documentLink,
}) {
  return (
    <div className="card text-center pt-4">
      <div className="card-body-mentor">
        <h5 className="card-title-mentor fw-bold">{title}</h5>

        <p className="card-text-mentor">Nilai Mentor</p>
        <div className="circle-mentor">
          <p className="score-mentor">{score}</p>
        </div>
        <p className="card-text-mentor fw-bold">Feedback Mentor</p>
        <p className="feedback">
          "{!feedback ? "Belum ada feedback" : feedback}"
        </p>

        <div className="file-link-container">
          <div className="file-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="file-details">
            <div className="file-name">Project Challenge_Puisi.pdf</div>
            <div className="file-type">Dokumen</div>
          </div>
        </div>
      </div>
    </div>
  );
}
