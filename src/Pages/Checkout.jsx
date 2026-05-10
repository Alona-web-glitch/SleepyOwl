import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import "../css/CheckOut.css";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getTotalPrice,
    closeCart,
  } = useCart();

  // ✅ AUTO CLOSE CART WHEN PAGE OPENS
  useEffect(() => {
    closeCart();
  }, [closeCart]);

  const [shipping, setShipping] = React.useState("free");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  return (
    <div className="checkout">

      <div className="checkout-heading">
        <h1 className="checkout-title">Shipping Address</h1>
      </div>

      <div className="checkout-container">

        <div className="checkout-left">

          <form className="checkout-form">

            <div className="input-row">

              <div className="input-group">
                <label>First Name*</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>

            </div>

            <div className="input-row">

              <div className="input-group">
                <label>Email*</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

            </div>

            <div className="input-row">

              <div className="input-group">
                <label>City*</label>
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label>State*</label>
                <input
                  type="text"
                  placeholder="State"
                  required
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label>Pin Code*</label>
                <input
                  type="text"
                  placeholder="Pincode"
                  required
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                />
              </div>

            </div>

            <div className="input-group full-width">
              <label>Address*</label>
              <textarea
                placeholder="Enter your full address..."
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

          </form>

        </div>

        <div className="checkout-right">

          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>

                <img src={item.img} alt="" />

                <div className="checkout-info">

                  <div className="checkout-top">

                    <div>
                      <h4>{item.name}</h4>
                      <p>₹{item.price}</p>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>

                  </div>

                  <div className="checkout-qty">

                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>

                  </div>

                </div>

              </div>
            ))
          )}

          <div className="checkout-total">
            <h3>Total</h3>
            <h3>₹{getTotalPrice()}</h3>
          </div>

          <button
            className="place-order-btn"
            onClick={() => {
              closeCart();

              navigate("/payment", {
                state: {
                  products: cartItems.map((item) => ({
                    ...item,
                    price: Number(String(item.price).replace(/[^0-9]/g, "")),
                  })),
                  total: getTotalPrice(),
                  address: formData,
                },
              });
            }}
          >
            Continue To Payment
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;