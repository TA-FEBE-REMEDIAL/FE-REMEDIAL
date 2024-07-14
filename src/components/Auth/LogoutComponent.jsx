import { NavLink, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const LogoutComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan keluar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d05d5d",
      cancelButtonColor: "#bc4c4c",
      confirmButtonText: "Ya, keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Hapus token dari localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("data");

        // Tampilkan pesan keberhasilan
        Swal.fire({
          title: "Logout Berhasil!",
          icon: "success",
          confirmButtonColor: "#d05d5d",
        }).then(() => {
          navigate("/login");
          window.location.reload();
        });
      }
    });
  };
  return (
    <button onClick={handleLogout} type="button" className="btn btn-logout">
      Keluar
    </button>
  );
};

export default LogoutComponent;
