import React, { useState } from 'react';
import './CardPizza.css';
import { useCart } from '../../CartContext/CartContext';


const CardPizza = ({ pizza }) => {
  const { name, image, price, ingredients } = pizza;
  const {addToCart} = useCart();
  const handledAddToCart = () => {
    addToCart (pizza);
  };

  return (
    <div className="card-pizza">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button className= "btn btn-primary" onClick={handledAddToCart}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default CardPizza;




/*function CardPizza({ name, price, ingredients, img }) {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-secondary">Añadir</button>
        </div>
      </div>
    );
  }*/
  
  