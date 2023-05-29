import "./App.css";
import "../src/style/Navbar.css";
import "../src/style/Footer.css";
import "../src/style/Home.css";
import "../src/style/Menu.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./routes/Menu";
import Product from "./routes/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
