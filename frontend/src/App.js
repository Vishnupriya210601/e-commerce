import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Layouts/Header/Header';
import Footer from './components/Layouts/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/Pages/ProductDetails/ProductDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItems from './components/Pages/CartItems/CartItems';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
        <Router>
          <div>
            <ToastContainer theme='dark' position='top-center' />
            <Header cartItems={cartItems} />
            <Routes>
                <Route path="/"  element={ <Home />}/>
                <Route path="/search"  element={ <Home />}/>
                <Route path="/product/:id"  element={ <ProductDetails cartItems={cartItems}  setCartItems={setCartItems}  />}/>
                <Route path="/cart"  element={ <CartItems cartItems={cartItems}  setCartItems={setCartItems}  />}/>
            </Routes>
          </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
