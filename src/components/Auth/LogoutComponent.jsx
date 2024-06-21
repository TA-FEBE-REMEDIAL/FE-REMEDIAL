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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
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
        }).then(() => {
          window.location.reload();
          navigate("/");
        });
      }
    });
  };
  return (
    <button onClick={handleLogout} type="button" className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutComponent;
