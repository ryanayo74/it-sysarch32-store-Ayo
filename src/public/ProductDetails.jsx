import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase-config";
import StarRating from "../components/Ratings";
import Header from "../components/Header";
import Loading from "../components/Loading";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  const handleBuyNowClick = (e) => {
    e.preventDefault();
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
            ₱{product.Price}
          </label>
          <label className="raleway-font font-small text-gray">
            <StarRating rating={product.Rating} />
          </label>
          <label className="raleway-font font-small text-gray">
            {product.Address}
          </label>
          <form className="mt-5" onSubmit={handleBuyNowClick}>
            <button className="btn-paymongo" type="submit">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
