import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading.jsx";
import Product from "./public/Product.jsx";
import ProductDetails from "./public/ProductDetails";
import { auth } from "./config/firebase-config.js";
import "./App.css";

export default function App() {
  const [setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [setUser] = useState(null);

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