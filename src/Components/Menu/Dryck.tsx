import  { useState } from 'react';
import '../assets/Dryck.css'
const Dryck = () => {
  const [dryckData, setDryckData] = useState([
    {
      id: 1,
      name: 'Cola',
      description: 'Kolsyrad läskdryck.',
      price: 15,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Apelsinjuice',
      description: 'Färskpressad apelsinjuice.',
      price: 25,
      quantity: 0,
    },
    // Lägg till fler dryckesalternativ här
  ]);

  const handleOrder = (dryckId: number, action: string) => {
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

  const handleAddToCart = (dryckId: number) => {
    // Implementera här: Lägg till logik för att lägga till dryck i varukorgen
    console.log(`Lägg till dryck ${dryckId} i varukorgen.`);
  };

  return (
    <div className="dryck-container">
      <h2>Dryck</h2>
      {dryckData.map((dryck) => (
        <div className="dryck-item" key={dryck.id}>
          <div className="dryck-details">
            <h3>{dryck.name}</h3>
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
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(dryck.id)}
            >
              Lägg till
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dryck;
