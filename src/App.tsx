import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Caminhao from "./pages/Caminhao";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caminhao" element={<Caminhao />} />{" "}
        {/* ← ADICIONA ESSA LINHA */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
