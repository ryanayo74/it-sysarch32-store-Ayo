import { useState, useEffect } from "react";
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";

import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-cards">
      <Link to={`/product/${product.id}`}>
        <FaShoppingCart className="cart-icon" />
      </Link>
      <Link to={`/product/${product.id}`}>
        <img className="product-image" src={product.Image} alt={product.Name} />
      </Link>
      <label className="raleway-font font-bold font-small text-dark text-center">
        {product.Name}
      </label>
      <label className="raleway-font font-bold font-small text-dark text-center">
        {product.Description}
      </label>
      <label className="raleway-font font-small text-dark text-center">
        ₱{product.Price}
      </label>
      <label className="raleway-font font-small text-gray text-center">
        {product.Address}
      </label>
    </div>
  );
}

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCollection = collection(db, "Products");
        const querySnapshot = await getDocs(productCollection);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="wrapper mt-5">
        <div className="main">
          <label className="raleway-font font-bold font-big text-white">
            R.A STORE
          </label>
          <label className="raleway-font font-thin text-white">
            BUY COMPUTER PARTS
          </label>
        </div>
        <div className="side">
          <div className="child-1" data-product="Mouse" data-price="$20" data-brand="Logitech">
            <label className="raleway-font font-logo font-bold text-white">
              Mouse
            </label>
            <label className="raleway-font font-small text-white">
              Wireless mouse.
            </label>
          </div>
          <div className="child-2" data-product="Keyboard" data-price="$50" data-brand="Corsair">
            <label className="raleway-font font-logo font-bold text-white">
              Keyboard
            </label>
            <label className="raleway-font font-small text-white">
              Mechanical keyboards
            </label>
          </div>
          <div className="child-3" data-product="Others" data-price="$30" data-brand="HP">
            <label className="raleway-font font-logo font-bold text-white">
              Others
            </label>
            <label className="raleway-font font-small text-white">
              HP printer with scanner
            </label>
          </div>
          <div className="child-4" data-product="More Details" data-price="" data-brand="">
            <label className="raleway-font font-logo font-bold text-white">
              More Details
            </label>
            <label className="raleway-font font-small text-white">
              Click here for more details.
            </label>
          </div>
        </div>
      </div>
      <div className="product-header">
        <label className="raleway-font font-bold font-big text-dark">
          Product List
        </label>
      </div>
      <div className="products-layer mt-3">
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
}

export default Product;