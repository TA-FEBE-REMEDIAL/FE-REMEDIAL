import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { navLinksDrop, navLinks } from "../data/navbar";
import { NavLink } from "react-router-dom";
import img1logo from "../assets/img/logo/1.png";
// import studentIcon from "../assets/img/icons/student.png"; // import the student icon
import LogoutComponent from "./Auth/LogoutComponent";
import img1profile from "../assets/img/profile/1.png";
import { BsPersonCircle } from "react-icons/bs";
import { useUser } from "../context/UserContext";
// import "./NavbarComponent.css"; // Import custom CSS for styling

const NavbarComponent = (props) => {
  const { getUserData } = useUser();
  const data = getUserData();
  const user = data[0];

  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <div>
      <Navbar expand="lg" className={`bg-body-tertiary ${props.align}`}>
        <Container>
          <NavLink to={"/"}>
            <Navbar.Brand>
              <img src={img1logo} alt="Logo" width={150} />
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={props.hide}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto text-center ${props.hide} `}>
              {navLinks.map((link, index) => (
                <div className="nav-link custom" key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
              {navLinksDrop.map((program, index) => (
                <NavLink
                  key={index}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <div className="nav-link drop-bg">
                    <NavDropdown
                      className="title-bg"
                      title={program.text}
                      id="basic-nav-dropdown"
                    >
                      {program.sub.map((subData, subIndex) => (
                        <div className="nav-link no-bg" key={subIndex}>
                          <NavDropdown.Item>
                            <NavLink
                              key={subIndex}
                              to={subData.path}
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              {subData.name}
                            </NavLink>
                          </NavDropdown.Item>
                        </div>
                      ))}
                    </NavDropdown>
                  </div>
                </NavLink>
              ))}
            </Nav>

            <div className={`text-center ${props.hide} `}>
              {!isAuthenticated() ? (
                <>
                  <NavLink to={"/register"}>
                    <button
                      type="button"
                      className="btn btn-outline-danger rounded-1 m-2"
                    >
                      Daftar
                    </button>
                  </NavLink>
                  <NavLink to={"/login"}>
                    <button type="button" className="btn btn-danger">
                      Masuk
                    </button>
                  </NavLink>
                </>
              ) : (
                <div className="profile-section">
                  <div
                    className="d-flex align-items-center text-white profile-info"
                    onClick={toggleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={img1profile}
                      alt="Student Icon"
                      width={40}
                      className="me-1"
                    />
                    {/* <BsPersonCircle className="me-2 icon-profile" /> */}
                    <span>
                      {user.name} | {user.role}
                    </span>
                  </div>
                  {showLogout && (
                    <div className="logout-container">
                      <LogoutComponent />
                    </div>
                  )}
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
