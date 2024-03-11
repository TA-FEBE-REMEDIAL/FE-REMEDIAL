import React from "react";
import { IoChevronForward } from "react-icons/io5";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Layanan</h4>
                  <ul>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/program">Program</NavLink>
                    </li>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/artikel">Artikel</NavLink>
                    </li>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/karya">Karya Siswa</NavLink>
                    </li>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/tentangkami">Tentang Kami</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Program</h4>
                  <ul>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/senirupa">Seni Rupa</NavLink>
                    </li>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/senimusik">Seni Musik</NavLink>
                    </li>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/senisastra">Seni Sastra</NavLink>
                    </li>
                    <li>
                      <IoChevronForward />{" "}
                      <NavLink to="/senipertunjukan">Seni Pertunjukan</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p /> Jl.Merdeka Raya No.19 <br /> DKI Jakarta, 13410
                  <br /> Indonesia <br />
                  <br />
                  <strong>Phone:</strong> 081387448516
                  <br />
                  <strong>Email:</strong> remedialserrum@gmail.com
                  <br />
                </div>

                <div className="col-lg-3 col-md-6 footer-info">
                  <a href="/home" className="logo d-flex align-items-center">
                    {/* <img src={logo} alt="" /> */}
                    <span></span>
                  </a>
                  <p>
                    Remedial merupakan kegiatan yang akan Serrum lakukan selama
                    1 tahun di 2019.Dengan metode saling silang informasi yang
                    menghasilkan pengetahuan dan pendekatan seni dan literasi.
                  </p>
                  <div className="social-links mt-3">
                    <Link to="https://www.twitter.com" className="twitter">
                      <AiOutlineTwitter target="_blank" />
                    </Link>
                    <Link to="https://www.facebook.com" className="facebook">
                      <AiFillFacebook target="_blank" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/remedial_s/"
                      className="instagram"
                    >
                      <AiFillInstagram target="_blank" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>remedial.id</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by Chika Aulia Zahwa & Ahmad Noval Fahmi
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
