import React from "react";
import { Link } from "react-router-dom";
import img1forum from "../assets/img/forum/1.png";
import { categories } from "../data/kategoridiskusi";

function ForrumDiskusiPage() {
  return (
    <div className="top-nav ">
      <section id="breadcrumbs" className="breadcrumbs px-5  ">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11">
              <ol>
                <li>
                  <Link to="/home">Beranda</Link>
                </li>
                <li>Forum Diskusi</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="banner-container">
          <div className="banner-content">
            <img src={img1forum} alt="Banner" className="banner-image" />
            <div className="banner-text">
              <h2>Selamat Datang di</h2>
              <h1 className="forum mt-4">Forum Diskusi Program Remedial</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="category-list my-5">
        {categories.map((category, index) => (
          <div
            className="category-item container"
            style={{ backgroundColor: category.color }}
            key={index}
          >
            <div className="category-header">
              <img
                src={category.icon}
                alt={`${category.name} icon`}
                className="category-icon"
              />
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </div>
            {category.tags && (
              <div className="category-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {/* <div className="category-topics">
              <span>{category.topics}</span> Topics
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForrumDiskusiPage;
