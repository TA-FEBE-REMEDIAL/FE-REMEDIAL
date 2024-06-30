import React from "react";
import { Link } from "react-router-dom";

export default function MentorCard({ title, score, feedback, pdf }) {
  const maxLength = 25;
  const nameFileLampiran = pdf.map((url) => url.replace(/.*\//, ""));

  const truncateFileName = (fileName) => {
    if (fileName.length > maxLength) {
      const truncatedName = fileName.substring(0, maxLength - 3) + ".. ";
      const extension = fileName.substring(fileName.lastIndexOf("."));

      return truncatedName + extension;
    }
    return fileName;
  };

  const truncatedFileNames = [];
  nameFileLampiran.forEach((url) => {
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    const truncatedFileName = truncateFileName(fileName);
    truncatedFileNames.push(truncatedFileName);
  });

  const typeFile = (fileName) => {
    const documentExtensions = [
      ".pdf",
      ".doc",
      ".docx",
      ".ppt",
      ".pptx",
      ".xls",
      ".xlsx",
    ];
    const imageExtensions = [".jpg", ".jpeg", ".png"];

    const ext = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
    if (documentExtensions.includes(ext)) {
      return "Dokumen";
    } else if (imageExtensions.includes(ext)) {
      return "Gambar";
    } else {
      return "Lainnya";
    }
  };

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

        {pdf.map((data, index) => (
          <div className="link-file" key={index}>
            <Link to={data} target="_blank">
              <div className="file-link-container my-2">
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
                  <div className="file-name">{truncatedFileNames[index]}</div>
                  <div className="file-type">
                    {typeFile(truncatedFileNames[index])}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
