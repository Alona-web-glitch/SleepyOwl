import React, { useState } from 'react';
import '../css/Bulk.css';
import Bulk1 from '../assets/Bulk1.png';

const Orders = () => {

  const [activeButton, setActiveButton] = useState('bulk');

  return (
    <div className="Order">
      <div className="orders-container">
        <div className="orders-wrapper">

          <div
            className="order-image"
            style={{ backgroundImage: `url(${Bulk1})` }}
          ></div>

          <div className="order-form-section">

            <h1 className="order-title">Bulk & Special Orders</h1>

            <p className="order-description">
              Want something and want too many of it? Use this form if you wish
              to place a bulk order with Sleepy Owl. Looking forward to meeting
              you in a cup.
            </p>

            <p className="order-contact">
              Got a question? Call <a href="tel:+919636687915">+91 9636687915</a> for instant answers.
            </p>

            <div className="order-buttons">

              <button
                className={activeButton === 'bulk' ? 'active-btn' : 'inactive-btn'}
                onClick={() => setActiveButton('bulk')}
              >
                BULK ORDERS
              </button>

              <button
                className={activeButton === 'corporate' ? 'active-btn' : 'inactive-btn'}
                onClick={() => setActiveButton('corporate')}
              >
                CORPORATE GIFTING
              </button>

            </div>

            {activeButton === "bulk" && (
              <form className="order-form">
                <input type="text" placeholder="Name*" required />
                <input type="email" placeholder="Email*" required />
                <input type="tel" placeholder="Mobile*" required />
                <input type="text" placeholder="Purpose of order*" required />
                <input type="number" placeholder="Quantity required*" required />
                <textarea placeholder="Tell us more about your requirements..."></textarea>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            )}
            {activeButton === "corporate" && (
              <form className="order-form">

                <input type="text" placeholder="Name*" required />
                <input type="text" placeholder="Email*" required />
                <input type="email" placeholder="Mobile*" required />
                <input type="tel" placeholder="Company Name*" required />
                <input type="number" placeholder="Quantity Required*" required />
                <textarea placeholder="Tell us more about your requirements..."></textarea>

                <button type="submit" className="submit-btn">
                  SEND REQUEST
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;