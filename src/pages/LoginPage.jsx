import React from "react";
import { Row, Col } from "react-bootstrap";
import img1login from "../assets/img/login/1.png";
import LoginComponent from "../components/Auth/LoginComponent";
import NavbarComponent from "../components/NavbarComponent";

function LoginPage() {
  return (
    <>
      <NavbarComponent hide="d-none" align="py-2" />
      <div className="top-nav" id="login">
        <div className="container">
          <Row>
            <Col xs={7}>
              <img src={img1login} alt="" className="w-75 " />
            </Col>
            <Col>
              <LoginComponent />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
