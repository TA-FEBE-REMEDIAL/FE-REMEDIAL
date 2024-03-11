import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { navLinksDrop, navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink to={"/"}>
            <Navbar.Brand>Remedial.id</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinksDrop.map((program, index) => {
                return (
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <div className="nav-link drop-bg" key={index}>
                      <NavDropdown
                        className="title-bg"
                        key={index}
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

              {navLinks.map((link) => {
                return (
                  <div className="nav-link custom" key={link.id}>
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
            </Nav>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-outline-danger rounded-1 m-2"
              >
                Daftar
              </button>
              <button type="button" className="btn btn-danger">
                Masuk
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
