import React from "react";
import { useLocation } from "react-router-dom";
import "../css/Invoice.css";

const Invoice = () => {

  const location = useLocation();

  const products =
    location.state?.products || [];

  const address =
    location.state?.address || {};

  const total =
    Number(location.state?.total) || 0;

  const paymentMethod =
    location.state?.method || "Card";

  const deliveryCharge =
    paymentMethod === "Cash On Delivery"
      ? 5
      : 0;

  const invoiceNo = Math.floor(
    10000 + Math.random() * 90000
  );

  const currentDate =
    new Date().toLocaleDateString();

  return (

    <div className="invoice-page">

      <div className="invoice-container">

        <div className="invoice-header">

          <h1 className="invoice-title">
            Invoice
          </h1>

          <div className="invoice-info">

            <p>

              <span>
                INVOICE NO:
              </span>

              #{invoiceNo}

            </p>

            <p>

              <span>
                DATE:
              </span>

              {currentDate}

            </p>

            <p>

              <span>
                PAYMENT:
              </span>

              {paymentMethod}

            </p>

          </div>

        </div>

        <div className="invoice-top">

          <div className="bill-section">

            <div className="bill-box">

              <h3>
                BILLED TO:
              </h3>

              <p>
                {address.firstName}{" "}
                {address.lastName}
              </p>

              <p>
                {address.address}
              </p>

              <p>
                {address.city},{" "}
                {address.state}
              </p>

              <p>
                {address.pincode}
              </p>

              <p>
                {address.email}
              </p>

              <p>
                {address.phone}
              </p>

            </div>

            <div className="line"></div>

            <div className="bill-box">

              <h3>
                FROM:
              </h3>

              <p>
                Sleepy Owl
              </p>

              <p>
                Premium Coffee Store
              </p>

              <p>
                sleepyowl.com
              </p>

            </div>

          </div>

          <div className="invoice-logo">

            <div className="logo-circle">

              Sleepy Owl

            </div>

          </div>

        </div>

        <div className="table-section">

          <table>

            <thead>

              <tr>

                <th>
                  ITEM
                </th>

                <th>
                  QUANTITY
                </th>

                <th>
                  PRICE
                </th>

                <th>
                  TOTAL
                </th>

              </tr>

            </thead>

            <tbody>

              {products.length > 0 ? (

                products.map((item, index) => (

                  <tr key={index}>

                    <td className="item-name">

                      {item.name}

                    </td>

                    <td>

                      {Number(item.quantity) || 0}

                    </td>

                    <td>

                      ₹{Number(item.price) || 0}

                    </td>

                    <td className="total-price">

                      ₹{
                        (Number(item.price) || 0) *
                        (Number(item.quantity) || 0)
                      }

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="empty-row"
                  >

                    No Products Found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="subtotal-section">

          <div className="subtotal-box">

            <div className="subtotal-row">

              <h3>
                SUBTOTAL
              </h3>

              <p>
                ₹{total - deliveryCharge}
              </p>

            </div>

            <div className="subtotal-row">

              <h3>
                DELIVERY
              </h3>

              <p>
                ₹{deliveryCharge}
              </p>

            </div>

            <div className="subtotal-row total-row">

              <h2>
                TOTAL
              </h2>

              <h2>
                ₹{total}
              </h2>

            </div>

          </div>

        </div>

        <div className="invoice-footer">

          <div className="payment-options">

            <h1>
              Payment Options:
            </h1>

            <p>
              CARD PAYMENT
            </p>

            <p>
              CASH ON DELIVERY
            </p>

            <p>
              UPI PAYMENT
            </p>

            <p>
              NET BANKING
            </p>

          </div>

          <div className="thank-you-section">

            <h1>
              Thank you!
            </h1>

            <div className="socials">

              <span>
                Instagram
              </span>

              <span>
                Facebook
              </span>

              <span>
                Twitter
              </span>

            </div>

            <p className="website">

              @sleepyowl | sleepyowl.com

            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Invoice;