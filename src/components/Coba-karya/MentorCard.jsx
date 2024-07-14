import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MentorCard({ title, score, feedback, pdf, url }) {
  const [copiedStatus, setCopiedStatus] = useState(
    Array(url.length).fill(false)
  );
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

  const handleCopyClick = (linkIndex) => {
    navigator.clipboard
      .writeText(url[linkIndex])
      .then(() => {
        // Set isCopied untuk tautan yang diklik menjadi true
        let newCopiedStatus = Array(url.length).fill(false);
        newCopiedStatus[linkIndex] = true;
        setCopiedStatus(newCopiedStatus);

        // Reset isCopied setelah beberapa detik
        setTimeout(() => {
          newCopiedStatus[linkIndex] = false;
          setCopiedStatus(newCopiedStatus);
        }, 2000); // Tooltip visibility duration
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const filteredUrl = url.filter((item) => item !== "");

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

        {filteredUrl.length > 0 ? (
          <>
            {url.map((data, index) => (
              <div className="link-section" key={index}>
                <div className="link-container styled-link">
                  <div className="link-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"
                        stroke="#4A4A4A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="link-text">{data}</span>
                  <div
                    className="copy-icon"
                    onClick={() => handleCopyClick(index)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H8C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2V2Z"
                        stroke="#4A4A4A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2V4H18V14H16M16 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4H8M6 4H4V16H6M6 4H4V16H4M4 16H6V18H8M8 16V18H16M8 16H16M16 18H18V20H8M16 18V20M16 18H8M8 20H16M16 20H18"
                        stroke="#4A4A4A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {console.log(copiedStatus[index])}
                    {copiedStatus[index] && (
                      <div className="tooltip">Copied</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
