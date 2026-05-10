import React, { useState } from 'react';
import '../css/Bulk.css';
import Bulk1 from '../assets/Bulk1.png';

const Orders = () => {

  const [activeButton, setActiveButton] = useState('bulk');
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending message...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "1f1de27a-c07e-4763-9986-c04aae71fc62"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully");
      event.target.reset();
    } else {
      setResult("Message failed");
    }
  };

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
              <form className="order-form" onSubmit={onSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile*"
                  required
                />

                <input
                  type="text"
                  name="purpose"
                  placeholder="Purpose of order*"
                  required
                />

                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity required*"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell us more about your requirements..."
                ></textarea>

                <button type="submit" className="submit-btn">
                  Submit
                </button>

              </form>
            )}

            {activeButton === "corporate" && (
              <form className="order-form" onSubmit={onSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile*"
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name*"
                  required
                />

                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity Required*"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell us more about your requirements..."
                ></textarea>

                <button type="submit" className="submit-btn">
                  SEND REQUEST
                </button>

              </form>
            )}

            <span className="message-status">{result}</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;