import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 


  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      
      if (existingProduct) {
       
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }

     
      return [...prev, { ...product, quantity: 1 }];
    });
  };

 
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

 
  const incrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };


  const decrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } 
          : item
      )
    );
  };

  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

