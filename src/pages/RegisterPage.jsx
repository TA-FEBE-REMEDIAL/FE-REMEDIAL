import React from "react";
import RegisterComponent from "../components/Auth/RegisterComponent";
import NavbarComponent from "../components/NavbarComponent";

function RegisterPage() {
  return (
    <>
      <NavbarComponent hide="d-none" align="py-2" />
      <div className="" id="register">
        <RegisterComponent />
      </div>
    </>
  );
}

export default RegisterPage;
