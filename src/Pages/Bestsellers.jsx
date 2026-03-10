import React from "react";
import Footer from "../Components/Footer";
import Sellers from "../Components/Sellers";
import Best from "../assets/Best.png";

const Bestsellers = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${Best})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <Sellers />
      <Footer />
    </div>
  );
};

export default Bestsellers;
