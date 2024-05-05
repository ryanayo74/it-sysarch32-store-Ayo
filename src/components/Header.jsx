import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const [showMessage, setShowMessage] = useState(false); // State for controlling message visibility

  // Function to toggle the message visibility
  const toggleMessage = () => {
    setShowMessage(!showMessage);
    setTimeout(() => setShowMessage(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <header className="header-orange">
      <div className="logo">
        <label className="text-black ms-5 raleway-font font-bold font-logo">
          R.A STORE
        </label>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link className="me-lg-5 mt-sm-5 raleway-font link" to="/">
              Home
            </Link>
          </li>
          <li>
            <button
              className="me-lg-5 mt-sm-5 raleway-font link" 
              onClick={toggleMessage} // Call toggleMessage function on button click
            >
              <FaShoppingCart /> Cart
            </button>
          </li>
        </ul>
      </nav>
      {showMessage && (
        <div className="popup-message">
          Cart functionality is not supported yet!
        </div>
      )}
    </header>
  );
}

export default Header;