import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Instant from './Pages/Instant'
import Bestsellers from './Pages/Bestsellers'
import Bulk from './Pages/Bulk'
import Navbar from './Components/Navbar'
import { CartProvider } from './Context/CartProvider'

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/instant' element = {<Instant/>}/>
          <Route path='/bestsellers' element = {<Bestsellers/>}/>
          <Route path='/bulk' element = {<Bulk/>}/>
        </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
