import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu/menu";
import Kundkorg from "./Components/Kundkorg/Kundkorg";
import StartPage from "./routes/Startpage/Startpage";
import Kvitto from "./Components/Kvitto/Kvitto";
import { Delivery } from "./routes/Delivery";
import Footer from "./Components/Footer/Footer";
import Betallning from "./Components/betallning/Betallning";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/startpage" element={<StartPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/kundkorg" element={<Kundkorg />} />
          <Route path="/kvitto" element={<Kvitto />} />
          <Route path="/leverans" element={<Delivery />} />
          <Route path="/betallning" element={<Betallning />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
