import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";   // ⬅️ MANCAVA QUESTO
import Footer from "./components/Footer";

import Home from "./components/Home";
import Schede from "./components/Schede";
import Workouts from "./components/CardWorkouts";
import Contatti from "./components/Contatti";
import DettagliScheda from "./components/DettagliScheda";
import DettagliCategorie from "./components/DettagliCategorie";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/schede/*" element={<Schede />} />
        <Route path="/esercizi" element={<Workouts />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/dettaglischeda" element={<DettagliScheda />} />
        <Route path="/dettaglicategoria" element={<DettagliCategorie />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
