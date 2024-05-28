import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
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
      <NavbarComponent />
      {/* <CarouselComponent /> */}

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/program" Component={ProgramPage} />
        <Route path="/program/detail-program" Component={DetailProgramPage} />
        <Route
          path="/program/detail-program/pilih-challange"
          Component={ChallengePage}
        />
        <Route
          path="/program/detail-program/pilih-challange/challenge-terpilih/:id"
          Component={PilihChallengePage}
        />
        <Route
          path="/program/detail-program/pilih-challange/challenge-terpilih/detail-challenge/:id"
          Component={DetailChallengePage}
        />
        <Route path="/artikel" Component={ArtikelPage} />
        <Route path="/artikel/detail-artikel" Component={DetailArtikelPage} />
        <Route path="/karya-siswa" Component={KaryaPage} />
        <Route
          path="/karya-siswa/detail-karyasiswa"
          Component={DetailKaryaPage}
        />
        <Route path="/tentang-kami" Component={TentangKamiPage} />
        <Route path="/forum-diskusi" Component={ForrumDiskusiPage} />
        <Route path="/kelaspage" Component={KelasPage} />
        <Route path="/kelaspage/detail-kelas" Component={DetailKelasPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
