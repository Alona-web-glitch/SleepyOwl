import React from 'react';
import {best} from '../Data/Best';
import { useCart } from '../Context/CartProvider'; 
import '../css/Instants.css';

const Bulk = () => {
  const { addToCart } = useCart(); 

  return (
    <div className='instant-container'>
      <div className="instant-card">
        {best.map((item) => (
          <div key={item.id} className="instant-item">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>

           
            <div className="instant-price-cart">
              <button onClick={() => addToCart(item)}>ADD TO CART</button>
              <span className='instant-price'>₹{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bulk;