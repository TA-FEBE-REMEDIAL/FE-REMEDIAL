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

function App() {
  return (
    <div>
      <NavbarComponent />
      {/* <CarouselComponent /> */}

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/program" Component={ProgramPage} />
        <Route path="/artikel" Component={ArtikelPage} />
        <Route path="/karya-siswa" Component={KaryaPage} />
        <Route path="/tentangkami" Component={TentangKamiPage} />
        <Route path="/kelaspage" Component={KelasPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
