import React from "react";
import Footer from "../Components/Footer";
import Sellers from "../Components/Sellers";
import Best from "../assets/Best.jpeg";
import "../css/Instants.css";

const Bestsellers = () => {
  return (
    <div>
      <div
        className="best-image"
        style={{
          backgroundImage: `url(${Best})`,
        }}
      ></div>

      <Sellers />
      <Footer />
    </div>
  );
};

export default Bestsellers;