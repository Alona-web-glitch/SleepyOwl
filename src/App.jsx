import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Instant from './Pages/Instant'
import Bestsellers from './Pages/Bestsellers'
import Bulk from './Pages/Bulk'
import Navbar from './Components/Navbar'
import Checkout from './Pages/Checkout';
import Payment from './Pages/Payment'
import { CartProvider } from './Context/CartProvider'
import Confirmed from './Pages/Confirmed'
import Invoice from './Pages/Invoice'

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
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/confirmed' element={<Confirmed/>}/>
          <Route path='/invoice' element={<Invoice/>}/>
        </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
