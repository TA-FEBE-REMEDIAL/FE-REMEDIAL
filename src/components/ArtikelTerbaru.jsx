import React from "react";
import { articles } from "../data/artikelterbaru";
import { Link } from "react-router-dom";

function ArtikelTerbaru({ data }) {
  const test = "tes";
  return (
    <div className="artikel-terbaru ">
      <div className="article-list">
        <h2>Artikel Terkait</h2>

        {data.map((article, index) => (
          <Link to={`/artikel/detail-artikel/${article.id}`} onClick={test}>
            <div className="article-item" key={index}>
              <img
                src={article.image_url}
                alt={article.title}
                className="article-image"
              />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtikelTerbaru;
