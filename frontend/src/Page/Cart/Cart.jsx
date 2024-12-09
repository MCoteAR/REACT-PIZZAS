import React, { useState } from "react";
import pizzaCart from "../../components/Data/Pizza"; 
import {useCart} from '../../CartContext/CartContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-12 mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Precio: ${item.price}</p>
                    <p className="card-text">
                      Cantidad:{" "}
                      <button
                        className="btn btn-outline-secondary btn-sm mx-1"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm mx-1"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-success">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

