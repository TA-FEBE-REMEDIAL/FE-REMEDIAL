import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "react-bootstrap/Form";
import TitleComponent from "../Form/TitleComponent";
import InputComponent from "../Form/InputComponent";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import FooterComponent from "../Form/FooterComponent";

import Swal from "sweetalert2";

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      return { token: response.data.token, data: response.data.data };
    } catch (error) {
      throw error;
    }
  },
};

function LoginComponent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Swal.fire({
          title: "Login Gagal!",
          html: "Email dan Password tidak<br>boleh Kosong!",
          icon: "error",
        });
        return;
      }

      const response = await authService.login(email, password);
      console.log(response);
      const { token, data } = response;

      localStorage.setItem("token", token);
      localStorage.setItem("data", JSON.stringify(data));

      Swal.fire({
        title: "Login Berhasil!",
        html: `Selamat datang ${data[0].name}`,
        icon: "success",
        confirmButtonColor: "#d05d5d",
      }).then(() => {
        navigate("/");
        window.location.reload();
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Login Gagal!",
          text: "Email atau Password salah",
          icon: "error",
        }).then(() => {
          window.location.reload();
        });
      } else if (error.request) {
        Swal.fire({
          title: "Login Gagal!",
          text: "Tidak dapat terhubung ke server",
          icon: "error",
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Login Gagal!",
          text: "Terjadi kesalahan",
          icon: "error",
        }).then(() => {
          window.location.reload();
        });
      }
    }
  };

  return (
    <div className="login">
      <TitleComponent
        title="Masuk ke Akun"
        descrip="Harap masuk dengan email yang sudah terdaftar"
      />
      <Form>
        <InputComponent
          value={email}
          change={(e) => setEmail(e.target.value)}
          label="Email:"
          type="email"
          holder="Masukkan email"
        />
        <InputComponent
          value={password}
          change={(e) => setPassword(e.target.value)}
          label="Password:"
          type="password"
          holder="Masukkan Password"
        />

        <div className="footer-form ">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={"Ingat Saya"} />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button onClick={handleLogin} variant="primary" type="button">
              {"Masuk"}
            </Button>
          </div>
          <div className="pt-3 text-center">
            <p>
              {"Belum punya akun?"}{" "}
              <span>
                <NavLink to={"/register"}>{"Daftar Sekarang"}</NavLink>
              </span>
            </p>
          </div>
        </div>
        {/* <FooterComponent
          label1="Ingat Saya"
          btnform="Masuk"
          footer="Belum punya akun?"
          to="/register"
          link="Daftar Sekarang"
        /> */}
      </Form>
    </div>
  );
}

export default LoginComponent;
