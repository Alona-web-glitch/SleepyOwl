import React from "react";
import { Item } from "../Data/Item";
import { Banner } from "../Data/Banner";
import "../css/CoffeeGrid.css";

const CoffeeGrid = () => {
  return (
    <div className="Main">
      <h1 className="para">Sleepy Owl is a homegrown Indian coffee brand. We <br />spend inordinately long making coffee that is as good <br /> as it can be in every single cup.</h1>

      <div className="CoffeeGrid-container">
        {Item.map((item) => (
          <div className="CoffeeGrid-card" key={item.id}>
            <div
              className="CoffeeGrid-img"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>

            <div className="grid-text">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="Banner-container">
        {Banner.map((sub) => (
          <div className="Banner-img"
              style={{ backgroundImage: `url(${sub.img})` }} key={sub.id}>
            

            {/* <div className="grid-text">
              <h2>{sub.title}</h2>
            </div> */}
          </div>
        ))}
      </div>

    </div>
  );
};

export default CoffeeGrid;