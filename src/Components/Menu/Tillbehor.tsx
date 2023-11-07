import { useState } from 'react';
import '../assets/Tillbehor.css'
const Tillbehor = () => {
  const [tillbehorData, setTillbehorData] = useState([
    {
      id: 1,
      name: 'wasabi',
      description: 'Ta klassiska thailändska smaker som pad thai, gröna curry och satay och servera dem som fyllning i tacoskal.',
      price: 29,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Pommes Frites',
      description: 'Krispiga pommes frites.',
      price: 29,
      quantity: 0,
    },
    // Lägg till fler tillbehörsalternativ här
  ]);

  const handleOrder = (tillbehorId: number, action: string) => {
    setTillbehorData((prevTillbehorData) =>
      prevTillbehorData.map((tillbehor) =>
        tillbehor.id === tillbehorId
          ? {
              ...tillbehor,
              quantity: action === 'add' ? tillbehor.quantity + 1 : tillbehor.quantity - 1,
            }
          : tillbehor
      )
    );
  };

  const handleAddToCart = (tillbehorId: number) => {
    // Implementera här: Lägg till logik för att lägga till tillbehör i varukorgen
    console.log(`Lägg till tillbehör ${tillbehorId} i varukorgen.`);
  };

  return (
    <div className="tillbehor-container">
      <h2>Tillbehör</h2>
      {tillbehorData.map((tillbehor) => (
        <div className="tillbehor-item" key={tillbehor.id}>
          <div className="tillbehor-details">
            <h3>{tillbehor.name}</h3>
            <p>{tillbehor.description}</p>
            <p>Pris: {tillbehor.price} kr</p>
          </div>
          <div className="quantity-controls">
            <button
              className="quantity-button"
              onClick={() => handleOrder(tillbehor.id, 'remove')}
              disabled={tillbehor.quantity === 0}
            >
              -
            </button>
            <span className="quantity">{tillbehor.quantity}</span>
            <button
              className="quantity-button"
              onClick={() => handleOrder(tillbehor.id, 'add')}
            >
              +
            </button>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(tillbehor.id)}
            >
              Lägg till
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tillbehor;
