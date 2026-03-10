import React from 'react'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import CoffeeGrid from '../Components/CoffeeGrid'
import Products from '../Components/Products'

const Home = () => {
  return (
    <>
      <Banner/>
      <CoffeeGrid/>
      <Products/>
      <Footer/>
    </>
  )
}

export default Home
