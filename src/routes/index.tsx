import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductShow from "../pages/ProductShow";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
