import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="header-orange"> {}
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
            <Link className="me-lg-5 mt-sm-5 raleway-font link" to="/cart">
              <FaShoppingCart /> Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
