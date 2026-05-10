import React from 'react'
import Footer from '../Components/Footer'
import Instants from '../Components/Instants'
import Coffee from '../assets/Instant.jpeg'
import '../css/Instants.css';

const Instant = () => {
  return (
    <div>
      <div
        className='instant-image'
        style={{
          backgroundImage: `url(${Coffee})`
        }}
      ></div>

      <Instants/>
      <Footer/>
    </div>
  )
}

export default Instant