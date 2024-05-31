import React from "react";
import Form from "react-bootstrap/Form";
import TitleComponent from "../Form/TitleComponent";
import InputComponent from "../Form/InputComponent";
import FooterComponent from "../Form/FooterComponent";

function LoginComponent() {
  return (
    <div className="login">
      <TitleComponent
        title="Masuk ke Akun"
        descrip="Harap masuk dengan email yang sudah terdaftar"
      />
      <Form>
        <InputComponent label="Email:" type="email" holder="Masukkan email" />
        <InputComponent
          label="Password:"
          type="password"
          holder="Masukkan Password"
        />
        <FooterComponent
          label1="Ingat Saya"
          btnform="Masuk"
          footer="Belum punya akun?"
          to="/register"
          link="Daftar Sekarang"
        />
      </Form>
    </div>
  );
}

export default LoginComponent;
