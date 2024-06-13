import React from "react";
import Form from "react-bootstrap/Form";
import TitleComponent from "../Form/TitleComponent";
import InputComponent from "../Form/InputComponent";
import FooterComponent from "../Form/FooterComponent";

function RegisterComponent() {
  return (
    <div className="register">
      <TitleComponent
        title="Daftar Akun Baru"
        descrip="Lengkapi form dibawah dengan data yang valid"
      />
      <Form>
        <InputComponent
          label="Nama Depan:"
          type="text"
          holder="Masukkan Nama Anda"
        />
        <InputComponent
          label="Nama Belakang:"
          type="text"
          holder="Masukkan Nama Belakang Anda"
        />
        <InputComponent label="Email" type="email" holder="Masukkan email" />
        <InputComponent
          label="Nomor WhatsApp:"
          type="number"
          holder="Masukkan Nomor Telfon Anda"
        />
        <InputComponent
          label="Password:"
          type="password"
          holder="Masukkan Password"
        />
        <InputComponent
          label="Konfirmasi Password:"
          type="password"
          holder="Konfirmasi Password"
        />
        <FooterComponent
          label1="Saya ingin mengikuti program remedial"
          btnform="Daftar"
          footer="Sudah punya akun?"
          to="/login"
          link="Masuk Sekarang"
        />
      </Form>
    </div>
  );
}

export default RegisterComponent;
