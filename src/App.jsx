import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import Loading from "./components/Loading.jsx";
import Product from "./public/Product.jsx";
import ProductDetails from "./public/ProductDetails";
import "./App.css";

export default function App() {
  const [] = useState(false);
  const [isLoading] = useState(false);
  const [] = useState(null);

  if (isLoading) {
    <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}