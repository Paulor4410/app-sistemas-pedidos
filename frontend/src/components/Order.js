// src/components/Order.js
import React, { useState } from 'react';

const Order = () => {
  const [selectedItems] = useState([]);

  const handleOrder = () => {
    // Lógica para enviar o pedido
    fetch('/api/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: selectedItems }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Pedido enviado:', data))
      .catch((error) => console.error('Error sending order:', error));
  };

  return (
    <div>
      <h1>Fazer Pedido</h1>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleOrder}>Enviar Pedido</button>
    </div>
  );
};

export default Order;
