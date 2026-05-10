import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { useCart } from "../Context/CartProvider";
import "../css/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    openCart,
    closeCart,
  } = useCart();

  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // ✅ FIXED OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [closeCart]);

  return (
    <nav className="coffee-navbar">
      <div className="nav-wrapper">

        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Coffee Logo" />
          </Link>
        </div>

        <ul className={`menu ${open ? "active" : ""}`}>
          <li className={isActive("/instant") ? "active" : ""}>
            <Link to="/instant">INSTANT COFFEE</Link>
          </li>
          <li className={isActive("/bestsellers") ? "active" : ""}>
            <Link to="/bestsellers">BESTSELLERS</Link>
          </li>
          <li className={isActive("/bulk") ? "active" : ""}>
            <Link to="/bulk">BULK ORDERS</Link>
          </li>
        </ul>

        <div className="icons" ref={cartRef}>

          <FaSearch />

          {/* CART ICON */}
          <div className="cart-icon" onClick={openCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.037.136l.002.007l.874 3.324l.012-.017q.063.068.121.143c.901 1.154.472 2.87-.386 6.301q-.116.469-.22.873l-2.477-2.973l1.83-2.685l-.505-1.922l-2.324 3.409L12.976 9h1.34c1.893 0 3.28 0 4.298.177l-.549-2.088c-.29-1.064-.393-1.395-.57-1.632a1.75 1.75 0 0 0-.767-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.279.568-.57 1.632l-.548 2.088C6.404 9 7.791 9 9.685 9h1.339L7.56 13.157L5.236 9.748L4.73 11.67l1.83 2.685l-2.477 2.973q-.104-.404-.22-.873c-.858-3.431-1.287-5.147-.386-6.301q.059-.075.121-.143l.012.017l.874-3.324l.002-.007l.037-.136c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222"
              />
              <path
                fill="currentColor"
                d="M4.602 19.05c.233.593.5 1.007.894 1.315C6.31 21 7.435 21 9.685 21h1.407L7.44 15.644zM12.908 21h1.407c2.25 0 3.375 0 4.189-.635c.394-.308.661-.722.894-1.316l-2.838-3.405zM12 19.669l-3.561-5.224L12 10.172l3.561 4.273z"
              />
            </svg>

            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </div>

          {/* MENU TOGGLE */}
          <div
            className={`menu-toggle ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* CART DROPDOWN */}
          {isCartOpen && (
            <div className="cart-dropdown">

              <div className="cart-header">
                <h4>Your Cart</h4>
                <button className="close-cart" onClick={closeCart}>
                  <FaTimes />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <p className="empty-cart">Cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.img} alt="" />

                      <div className="cart-info">
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>

                        <div className="qty-controls">
                          <button onClick={() => decreaseQty(item.id)}>
                            <FaMinus />
                          </button>

                          <span>{item.quantity}</span>

                          <button onClick={() => increaseQty(item.id)}>
                            <FaPlus />
                          </button>
                        </div>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}

                  <div className="cart-total">
                    <strong>Total:</strong>
                    <span>₹{getTotalPrice()}</span>
                  </div>

                  <Link to="/checkout" className="check-out-btn">
                    CHECK OUT
                  </Link>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;