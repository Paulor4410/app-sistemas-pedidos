// src/components/Menu.js
import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/cardapio') // Ajuste a URL conforme sua API
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div>
      <h1>Cardápio</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
