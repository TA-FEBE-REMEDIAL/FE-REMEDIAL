import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Form from "react-bootstrap/Form";
import TitleComponent from "../Form/TitleComponent";
import InputComponent from "../Form/InputComponent";
import FooterComponent from "../Form/FooterComponent";
import Button from "react-bootstrap/Button";

function RegisterComponent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("siswa");

  // Create User
  const addUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", {
        // console.log({
        name,
        email,
        password,
        confPassword,
        role,
      });

      Swal.fire({
        title: "Berhasil Register!",
        text: "Silahkan login terlebih dahulu!",
        icon: "success",
        confirmButtonColor: "#d05d5d",
      }).then(() => {
        navigate("/login");
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Gagal register!",
        text: `Gagal karena ${error.response.data.message}`,
        icon: "error",
      });
    }
  };

  return (
    <div className="register">
      <TitleComponent
        title="Daftar Akun Baru"
        descrip="Lengkapi form dibawah dengan data yang valid"
      />
      <Form>
        <InputComponent
          value={name}
          change={(e) => setName(e.target.value)}
          label="Nama Lengkap:"
          type="text"
          holder="Masukkan Nama lengkap Anda"
        />
        {/* <InputComponent
          label="Nama Belakang:"
          type="text"
          holder="Masukkan Nama Belakang Anda"
        /> */}
        <InputComponent
          value={email}
          change={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          holder="Masukkan email"
        />
        {/* <InputComponent
          label="Nomor WhatsApp:"
          type="number"
          holder="Masukkan Nomor Telfon Anda"
        /> */}
        <InputComponent
          value={password}
          change={(e) => setPassword(e.target.value)}
          label="Password:"
          type="password"
          holder="Masukkan Password"
        />
        <InputComponent
          value={confPassword}
          change={(e) => setConfPassword(e.target.value)}
          label="Konfirmasi Password:"
          type="password"
          holder="Konfirmasi Password"
        />

        <div className="footer-form ">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={"Saya ingin mengikuti program remedial"}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button onClick={addUsers} variant="primary" type="button">
              {"Daftar"}
            </Button>
          </div>
          <div className="pt-3 text-center">
            <p>
              {"Sudah punya akun?"}{" "}
              <span>
                <NavLink to={"/login"}>{"Masuk Sekarang"}</NavLink>
              </span>
            </p>
          </div>
        </div>
        {/* <FooterComponent
          label1="Saya ingin mengikuti program remedial"
          btnform="Daftar"
          footer="Sudah punya akun?"
          to="/login"
          link="Masuk Sekarang"
        /> */}
      </Form>
    </div>
  );
}

export default RegisterComponent;
