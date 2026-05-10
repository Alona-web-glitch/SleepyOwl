import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import "../css/Payment.css";

const Payment = () => {

  const navigate = useNavigate();

  const { clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("");

  const location = useLocation();

  const products = location.state?.products || [];

  const address = location.state?.address || {};

  const subtotal = location.state?.total || 0;

  const codFee =
    paymentMethod === "cod"
      ? 5
      : 0;

  const finalTotal = subtotal + codFee;

  return (

    <div className="payment-page">

      <div className="payment-container">

        <div className="payment-left">

          <h1 className="payment-title">
            Payment Method
          </h1>

          <p className="payment-subtitle">
            Select your preferred payment method.
          </p>

          <div className="payment-methods">

            <div className="payment-option">

              <div
                className={`payment-card ${
                  paymentMethod === "card"
                    ? "active-payment"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod(
                    paymentMethod === "card"
                      ? ""
                      : "card"
                  )
                }
              >

                <div>

                  <h3>
                    Credit / Debit Card
                  </h3>

                  <p>
                    Pay securely using your bank card
                  </p>

                </div>

                <div className="arrow-icon">

                  {paymentMethod === "card"
                    ? "▼"
                    : "▲"}

                </div>

              </div>

              {paymentMethod === "card" && (

                <div className="payment-form">

                  <div className="payment-input-group">

                    <label>
                      Card Holder Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                    />

                  </div>

                  <div className="payment-input-group">

                    <label>
                      Card Number
                    </label>

                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                    />

                  </div>

                  <div className="payment-row">

                    <div className="payment-input-group">

                      <label>
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        placeholder="MM/YY"
                      />

                    </div>

                    <div className="payment-input-group">

                      <label>
                        CVV
                      </label>

                      <input
                        type="password"
                        placeholder="***"
                      />

                    </div>

                  </div>

                </div>

              )}

            </div>

            <div className="payment-option">

              <div
                className={`payment-card ${
                  paymentMethod === "upi"
                    ? "active-payment"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod(
                    paymentMethod === "upi"
                      ? ""
                      : "upi"
                  )
                }
              >

                <div>

                  <h3>
                    UPI Payment
                  </h3>

                  <p>
                    Google Pay, PhonePe, Paytm
                  </p>

                </div>

                <div className="arrow-icon">

                  {paymentMethod === "upi"
                    ? "▼"
                    : "▲"}

                </div>

              </div>

              {paymentMethod === "upi" && (

                <div className="payment-form">

                  <div className="payment-input-group">

                    <label>
                      UPI ID
                    </label>

                    <input
                      type="text"
                      placeholder="example@upi"
                    />

                  </div>

                </div>

              )}

            </div>

            <div className="payment-option">

              <div
                className={`payment-card ${
                  paymentMethod === "cod"
                    ? "active-payment"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod(
                    paymentMethod === "cod"
                      ? ""
                      : "cod"
                  )
                }
              >

                <div>

                  <h3>
                    Cash On Delivery
                  </h3>

                  <p>
                    Pay when your order arrives
                  </p>

                </div>

                <div className="arrow-icon">

                  {paymentMethod === "cod"
                    ? "▼"
                    : "▲"}

                </div>

              </div>

              {paymentMethod === "cod" && (

                <div className="cod-message">

                  Additional convenience fee of
                  ₹5 will be charged for Cash On
                  Delivery.

                </div>

              )}

            </div>

          </div>

        </div>

        <div className="payment-right">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <p>
              Subtotal
            </p>

            <span>
              ₹{subtotal}
            </span>

          </div>

          <div className="summary-row">

            <p>
              Convenience Fee
            </p>

            <span>
              ₹{codFee}
            </span>

          </div>

          <div className="summary-total">

            <h3>
              Total
            </h3>

            <h3>
              ₹{finalTotal}
            </h3>

          </div>

          <button
            className="pay-btn"
            disabled={!paymentMethod}
            onClick={() => {

              navigate("/confirmed", {
                state: {
                  products: products,
                  address: address,
                  total: finalTotal,
                  method:
                    paymentMethod === "card"
                      ? "Credit / Debit Card"
                      : paymentMethod === "upi"
                      ? "UPI Payment"
                      : "Cash On Delivery",
                },
              });

              clearCart();

            }}
          >

            Pay Now

          </button>

        </div>

      </div>

    </div>

  );
};

export default Payment;