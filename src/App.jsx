import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Page/Cart/Cart.jsx';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Page/Home/Home.jsx';
import Register from './Page/Register/Register.jsx';
import Login from './Page/LoginPage/LoginPage.jsx';
import Pizza from './components/Data/Pizza.jsx';
import Profile from './Page/Profile/Profile.jsx';
import NotFound from './Page/NotFound/NotFound.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;





