import React from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/LoginPage/LoginPage';
import Pizza from './components/Data/Pizza.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home />
      {/* <Register /> */}
      {/* <Login /> */}
      {/*<Cart />*/}
      <Pizza/>
      <Footer />

     
    </div>
  );
};

export default App; 

