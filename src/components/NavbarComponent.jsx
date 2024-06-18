import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { navLinksDrop, navLinks } from "../data/navbar";
import { NavLink } from "react-router-dom";
import img1logo from "../assets/img/logo/1.png";

const NavbarComponent = (props) => {
  return (
    <div>
      <Navbar expand="lg" className={`bg-body-tertiary ${props.align}`}>
        <Container>
          <NavLink to={"/"}>
            <Navbar.Brand>
              <img src={img1logo} alt="" width={150} />
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={props.hide}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto text-center ${props.hide} `}>
              {navLinks.map((link, index) => {
                return (
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
                );
              })}
              {navLinksDrop.map((program, index) => {
                return (
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
                        {program.sub.map((subData, subIndex) => {
                          return (
                            <div className="nav-link no-bg" key={subIndex}>
                              <NavDropdown.Item>
                                <NavLink
                                  key={subIndex}
                                  to={subData.path}
                                  className={({ isActive, isPending }) =>
                                    isPending
                                      ? "pending"
                                      : isActive
                                      ? "active"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {subData.name}
                                </NavLink>
                              </NavDropdown.Item>
                            </div>
                          );
                        })}
                      </NavDropdown>
                    </div>
                  </NavLink>
                );
              })}
            </Nav>

            <div className={`text-center ${props.hide} `}>
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
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
