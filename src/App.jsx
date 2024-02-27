import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import PaymentPage from './Pages/PaymentPage';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path="/product/:id" element={ <ProductDetails /> } />
    <Route path="/cart" element={ <Cart /> } />
    <Route path="/payment" element={ <PaymentPage /> } />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
