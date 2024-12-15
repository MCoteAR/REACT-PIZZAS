import React, { useState } from "react";
import { useUserContext } from "../../Context/UserContext";
import { pizza } from "../../components/Data/PizzaData"; // Importa el array de todas las pizzas

const Cart = () => {
  const { token } = useUserContext();

  // Estado inicial para manejar las cantidades de cada pizza
  const [cart, setCart] = useState(
    pizza.map((item) => ({ ...item, count: 1 })) // Añadimos count a cada pizza
  );

  // Incrementar cantidad
  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Decrementar cantidad
  const decreaseCount = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0) // Eliminar si la cantidad llega a 0
    );
  };

  // Calcular total del carrito
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.count, 0);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Tu carrito está vacío.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "80px", height: "auto" }}
                      className="rounded"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.count}</td>
                  <td>${item.price * item.count}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() => decreaseCount(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => increaseCount(item.id)}
                    >
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-end mt-3">
        <h3>Total: ${calculateTotal()}</h3>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" disabled={!token}>
          Pagar
        </button>
        {!token && (
          <div className="alert alert-warning mt-2">
            Para realizar el pago, por favor inicie sesión.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;



