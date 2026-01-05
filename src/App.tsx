import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Caminhao from "./pages/Caminhao";

function App() {
  const [subtitle, setSubtitle] = useState<string | undefined>();

  return (
    <BrowserRouter>
      <Header subtitle={subtitle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/caminhao"
          element={<Caminhao setSubtitle={setSubtitle} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
