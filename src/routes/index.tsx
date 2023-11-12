import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductShow from "../pages/ProductShow";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductShow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
