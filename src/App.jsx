import { Routes, Route, Navigate } from "react-router-dom";

// import CarouselComponent from "./components/CarouselComponent";

import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ArtikelPage from "./pages/ArtikelPage";
import KaryaPage from "./pages/KaryaPage";
import TentangKamiPage from "./pages/TentangKamiPage";
import KelasPage from "./pages/KelasPage";
import DetailKelasPage from "./pages/DetailKelasPage";
import DetailKaryaPage from "./pages/DetailKaryaPage";
import DetailArtikelPage from "./pages/DetailArtikelPage";
import ForrumDiskusiPage from "./pages/ForrumDiskusiPage";
import DetailProgramPage from "./pages/DetailProgramPage";
import ChallengePage from "./pages/ChallengePage";
import PilihChallengePage from "./pages/PilihChallengePage";
import DetailChallengePage from "./pages/DetailChallengePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// console.log();

function App() {
  // Disable error gajelas
  const consoleError = console.error;
  console.error = function (warning) {
    if (/(validateDOMNesting)/.test(warning)) {
      return;
    }
    consoleError.apply(console, arguments);
  };

  return (
    <div>
      <Routes>
        {/* Auth */}
        <Route
          path="/login"
          element={!isAuthenticated() ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/register"
          element={
            !isAuthenticated() ? <RegisterPage /> : <Navigate to={"/"} />
          }
        />
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/program" Component={ProgramPage} />
        <Route
          path="/program/detail-program/:id"
          Component={DetailProgramPage}
        />
        <Route
          path="/program/detail-program/pilih-challange/:program_id"
          element={
            isAuthenticated() ? <ChallengePage /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/program/detail-program/pilih-challange/challenge-terpilih/:id"
          element={
            isAuthenticated() ? (
              <PilihChallengePage />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/program/detail-program/pilih-challange/challenge-terpilih/detail-challenge/:id"
          element={
            isAuthenticated() ? (
              <DetailChallengePage />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/artikel" Component={ArtikelPage} />
        <Route
          path="/artikel/detail-artikel/:id"
          Component={DetailArtikelPage}
        />
        <Route path="/karya-siswa" Component={KaryaPage} />
        <Route
          path="/karya-siswa/detail-karyasiswa/:id"
          Component={DetailKaryaPage}
        />
        <Route path="/tentang-kami" Component={TentangKamiPage} />
        <Route
          path="/forum-diskusi"
          element={
            isAuthenticated() ? (
              <ForrumDiskusiPage />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/kelaspage" Component={KelasPage} />
        <Route path="/kelaspage/detail-kelas/:id" Component={DetailKelasPage} />
      </Routes>
    </div>
  );
}

export default App;
