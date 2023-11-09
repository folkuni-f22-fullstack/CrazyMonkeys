import React, { useState } from 'react';
import '../Style/betallning.css'; // Ange rätt sökväg till din CSS-fil

interface CheckoutProps {
  // Eventuella props du behöver
}

const CheckoutPage: React.FC<CheckoutProps> = (props) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [swishNumber, setSwishNumber] = useState<string>('');

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const handleSwishNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwishNumber(event.target.value);
  };

  const handleProceed = () => {
    if ((paymentMethod === 'card' && cardNumber && expiryDate && cvv) ||
        (paymentMethod === 'swish' && swishNumber)) {
      // Validering lyckades, gå vidare med logiken
      console.log('Gå vidare!');
    } else {
      // Visa ett meddelande eller annan feedback för att informera användaren om att fylla i nödvändig information
      console.log('Fyll i nödvändig information för att gå vidare.');
    }
  };

  return ( 
    <div className="checkout-container">
      <h3>Betallningmetod</h3>

      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={handlePaymentChange}
          />
          Betala med kort
        </label>
      </div>

      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="swish"
            checked={paymentMethod === 'swish'}
            onChange={handlePaymentChange}
          />
          Betala med Swish
        </label>
      </div>

      {paymentMethod === 'card' && (
        <div className="payment-details">
          <p>Fyll i kortinformation:</p>
          <div>
            <label htmlFor="cardNumber">Kortnummer:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div>
            <label htmlFor="expiryDate">Utgångsdatum:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
        </div>
      )}

      {paymentMethod === 'swish' && (
        <div className="payment-details">
          <p>Fyll i Swish-information:</p>
          <div>
            <label htmlFor="swishNumber">Swish-nummer:</label>
            <input
              type="text"
              id="swishNumber"
              value={swishNumber}
              onChange={handleSwishNumberChange}
            />
          </div>
        </div>
      )}

      <div className="proceed-button">
        <button onClick={handleProceed}>Betala</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
