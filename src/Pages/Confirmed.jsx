import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../css/Confirmed.css";

const Confirmed = () => {

  const location = useLocation();

  const total = location.state?.total || 0;

  const paymentMethod =
    location.state?.method || "Card";

  const products =
    location.state?.products || [];

  const address =
    location.state?.address || {};

  return (

    <div className="success-page">

      <div className="success-container">

        <div className="success-logo">

          <h2>
            Sleepy Owl
          </h2>

        </div>

        <hr />

        <div className="success-icon">
          ✓
        </div>

        <h1 className="success-title">

          Your payment was successful!

        </h1>

        <p className="success-subtitle">

          Thank you for the payment!

          <br />

          Your order has been received successfully.

        </p>

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-box">

            <div className="summary-item">

              <p>
                Total Charged
              </p>

              <h3>
                ₹{total}
              </h3>

            </div>

            <div className="summary-item">

              <p>
                Payment Method
              </p>

              <h3>
                {paymentMethod}
              </h3>

            </div>

            <div className="summary-item">

              <p>
                Status
              </p>

              <h3 className="paid-text">
                Paid
              </h3>

            </div>

          </div>

        </div>

        <div className="success-buttons">

          <Link to="/">

            <button className="home-btn">

              Back To Home

            </button>

          </Link>

          <Link
            to="/invoice"
            state={{
              products: products,
              address: address,
              total: total,
              method: paymentMethod,
            }}
          >

            <button className="invoice-btn">

              Download Invoice

            </button>

          </Link>

        </div>

        <div className="success-footer">

          <p>

            If you have any questions regarding your order,
            please contact support@sleepyowl.com

          </p>

          <div className="footer-socials">

            <span>
              Facebook
            </span>

            <span>
              Instagram
            </span>

            <span>
              Twitter
            </span>

            <span>
              LinkedIn
            </span>

          </div>

          <p className="copyright">

            © 2026 Sleepy Owl

          </p>

        </div>

      </div>

    </div>

  );
};

export default Confirmed;