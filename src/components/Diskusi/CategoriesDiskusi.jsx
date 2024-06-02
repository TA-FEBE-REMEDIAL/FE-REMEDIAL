import React, { useState } from "react";

function CategoriesDiskusi() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="categories-container">
      <div className="categories-header">
        <button className="categories-button" onClick={toggleDropdown}>
          all categories
        </button>
        <button className="categories-button active">Categories</button>
      </div>
      {dropdownVisible && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Seni Rupa</div>
          <div className="dropdown-item">Musik</div>
          <div className="dropdown-item">Sastra</div>
          <div className="dropdown-item">Pertunjukan</div>
        </div>
      )}
      <div className="categories-list">
        <div className="category-diskusi">
          <h2>Komunitas</h2>
          <img src="path/to/komunitas-image.jpg" alt="Komunitas" />
          <p>Belajar bersama berbagai Komunitas yang ada di Program Remedial</p>
          <div className="tags mb-2">
            <span className="tag black">Komunitas Remedial</span>
          </div>
          {/* <span className="topics-count">38</span> */}
        </div>

        <div className="category-rupa">
          <h2>Artistry Accelerator: Program Remedial Seni Rupa</h2>
          <img src="path/to/seni-rupa-image.jpg" alt="" />
          <p>
            Tanya soal Seni Rupa disini. Dengan seni rupa, kita bisa
            mengekspresikan perasaan dan pemikiran kita secara visual dan
            kreatif.
          </p>
          {/* <span className="topics-count">230</span> */}
        </div>
        <div className="category-musik">
          <h3>Melody Mastery: Program Remedial Seni Musik</h3>
          <img src="path/to/seni-musik-image.jpg" alt="Seni Musik" />
          <p>
            Tanya soal Seni Musik di sini. Dengan seni musik, kita bisa
            menyampaikan emosi dan cerita melalui melodi dan ritme.
          </p>
          {/* <span className="topics-count">49</span> */}
        </div>
        <div className="category-sastra">
          <h3>Literary Forge: Program Remedial Seni Sastra</h3>
          <img src="path/to/seni-sastra-image.jpg" alt="Seni Sastra" />
          <p>
            Tanya soal Seni Sastra di sini. Dengan seni sastra, kita bisa
            menggambarkan kehidupan dan pengalaman manusia melalui kata-kata
            yang indah dan bermakna.
          </p>
          {/* <span className="topics-count">49</span> */}
        </div>
        <div className="category-pertunjukan mb-5">
          <h3>Stagecraft Intensive: Program Remedial Seni Pertunjukan</h3>
          <img
            src="path/to/seni-pertunjukan-image.jpg"
            alt="Seni Pertunjukan"
          />
          <p>
            Tanya soal Seni Pertunjukan di sini. Dengan seni pertunjukan, kita
            bisa menghidupkan cerita dan karakter di atas panggung melalui
            akting, tarian, dan musik.
          </p>
          {/* <span className="topics-count">189</span> */}
        </div>
      </div>
    </div>
  );
}

export default CategoriesDiskusi;
