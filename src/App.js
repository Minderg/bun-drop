import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./routes/Menu";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
