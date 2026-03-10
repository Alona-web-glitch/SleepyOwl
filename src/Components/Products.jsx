import React, { useState } from "react";
import { useCart } from "../Context/CartProvider";
import { products } from "../Data/Product";
import "../css/Products.css";

const Product = () => {

  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="Pro">
    <section className="products-section">

      <h2 className="section-title">Bestsellers </h2>

      <div className="tabs">
        {products.map((cat, index) => (
          <button
            key={cat.id}
            className={activeTab === index ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="products-grid">

        {products[activeTab].card.map((item) => {

          const cartItem = cart?.find((p) => p.id === item.id);

          return (

          <div className="product-card" key={item.id}>

            <div className="product-image">

              <img src={item.img} alt={item.name} />

              {cartItem ? (

                <div className="qty-box">

                  <button onClick={() => decreaseQty(item.id)}>
                    -
                  </button>

                  <span>{cartItem.quantity}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    +
                  </button>

                </div>

              ) : (

                <button
                  className="add-btn"
                  onClick={() => addToCart(item)}
                >
                  + ADD
                </button>

              )}

            </div>

            <div className="product-info">

              <div className="product-top">
                <h3>{item.name}</h3>
                <span className="price">₹{item.price}</span>
              </div>

              <p>{item.desc}</p>

            </div>

          </div>

          );

        })}

      </div>

    </section>
    </div>
  );
};

export default Product;