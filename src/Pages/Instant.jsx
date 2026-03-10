import React from 'react'
import Footer from '../Components/Footer'
import Instants from '../Components/Instants'
import Coffee from '../assets/Instant.jpeg'

const Instant = () => {
  return (
    <div>
      <div style={{
        width:'100%',
        height:'500px',
        backgroundImage:`url(${Coffee})`,
        backgroundPosition:'center',
        backgroundSize:'cover'
      }}></div>
      <Instants/>
      <Footer/>
    </div>
  )
}

export default Instant
