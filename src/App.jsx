import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/LoginPage/LoginPage';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}

      {/* <Login /> */}
      <Cart />
      <Footer />
     
    </div>
  );
};

export default App; 

