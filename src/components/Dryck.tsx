import React, { useState } from 'react';
import '../assets/Dryck.css'; // Importera din CSS-fil

const Dryck = () => {
  const [dryckData, setDryckData] = useState([
    {
      id: 1,
      name: 'Cola',
      description: 'En läsk med kolsyra.',
      price: 29,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Apelsinjuice',
      description: 'Färskpressad apelsinjuice.',
      price: 39,
      quantity: 0,
    },
    // Lägg till fler dryckesalternativ här
  ]);

  const handleOrder = (dryckId, action) => {
    setDryckData((prevDryckData) =>
      prevDryckData.map((dryck) =>
        dryck.id === dryckId
          ? {
              ...dryck,
              quantity: action === 'add' ? dryck.quantity + 1 : dryck.quantity - 1,
            }
          : dryck
      )
    );
  };

  return (
    <div className="dryck-container">
      <h2>Drycker</h2>
      <ul>
        {dryckData.map((dryck) => (
          <li key={dryck.id}>
            <div className="name-column">
              <h3>{dryck.name}</h3>
            </div>
            <div className="details-column">
              <p>{dryck.description}</p>
              <p>Pris: {dryck.price} kr</p>
            </div>
            <div className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => handleOrder(dryck.id, 'remove')}
                disabled={dryck.quantity === 0}
              >
                -
              </button>
              <span className="quantity">{dryck.quantity}</span>
              <button
                className="quantity-button"
                onClick={() => handleOrder(dryck.id, 'add')}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dryck;
