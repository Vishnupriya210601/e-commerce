import { Link } from "react-router-dom";
import Search from "../Search/Search";
import './Header.css'

export default function Header({cartItems}) {
    return <nav className="navbar navbar-expand-md bg-light shadow-sm px-3 py-2">
  <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">

    {/* Logo and Brand */}
    <div className="d-flex align-items-center mb-2 mb-md-0">
      <Link to="/" className="d-flex align-items-center text-decoration-none">
        <img
          src="/images/twin_leaves_logo.png"
          alt="TwinsyCart Logo"
          width="100px"
          height="100px"
          className="me-2"
        />
        <span className="cart-heading">TwinsyCart</span>
      </Link>
    </div>

    {/* Search Bar */}
    <div className="flex-grow-1 mx-md-4 my-2 my-md-0" >
      <Search />
    </div>

    {/* Cart Icon */}
    <div className="text-end">
      <Link to="/cart" className="text-decoration-none d-flex align-items-center">
        <img
          src="/images/cart.png"
          alt="Cart"
          width="30"
          height="30"
          className="me-2"
        />
        <span id="cart_count" className="badge rounded-pill">
          {cartItems.length}
        </span>
      </Link>
    </div>

  </div>
</nav>
};
