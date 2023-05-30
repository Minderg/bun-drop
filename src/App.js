import "./App.css";
import "../src/style/Navbar.css";
import "../src/style/Footer.css";
import "../src/style/Home.css";
import "../src/style/Menu.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Menu from "./routes/Menu";
import Cart from "./routes/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
