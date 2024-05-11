import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase-config";
import Header from "../components/Header";
import Loading from "../components/Loading";

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PFBYQBvPSqOWC2aGXXF2I2dRJ5acWkxTcTkEfhTItVnpOMJytq9mBxn7hz4UIW4QGExGvDuLbMgdfezEzhYS1cX00Gky306e3');

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = doc(db, "Products", productId);
        const productSnapshot = await getDoc(productDoc);
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleBuyNowClick = async (e) => {
    e.preventDefault();
    const productName = product.Name;
    const amount = product.Price * 100;
  
    try {
      const response = await fetch('http://localhost:4000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: productName,
          price: amount,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Session ID:', data.id); // Log session ID for debugging
  
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
  
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  };
  
  if (!product) {
    return <Loading />;
  }  

  return (
    <>
      <Header />
      <div className="wrapper mt-5">
        <div className="select-main">
          <div className="product-details">
            <img
              className="detail-image"
              src={product.Image}
              alt={product.Name}
            />
          </div>
        </div>
        <div className="select-side">
          <label className="raleway-font font-bold font-logo text-dark">
            {product.Name}
          </label>
          <label className="raleway-font font-bold font-small text-dark">
            {product.Description}
          </label>
          <label className="raleway-font font-small text-dark">
            ${product.Price}
          </label>
          <label className="raleway-font font-small text-gray">
            {product.Address}
          </label>
          <form className="mt-5" onSubmit={handleBuyNowClick}>
            <button className="btn-buy" type="submit">
              Check-Out
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;