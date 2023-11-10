import React, { useState } from 'react';
import '../Style/betallning.css'; // Ange rätt sökväg till din CSS-fil

interface CheckoutProps {
  // Eventuella props du behöver
}

const CheckoutPage: React.FC<CheckoutProps> = (props) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    setButtonDisabled(false); // Aktivera knappen när en betalningsmetod väljs
  };

  const handleProceed = () => {
    // Implementera logik för att gå vidare med betalningen
    console.log('Gå vidare med betalningen för', paymentMethod);
  };

  return (
    <div className="outer-container">
      <div className="checkout-container">
        <h2>Checkout</h2>

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

        <div className="payment-method">
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={handlePaymentChange}
            />
            Kontant vid upphämtning
          </label>
        </div>

        <div className="proceed-button">
          <button onClick={handleProceed} disabled={isButtonDisabled}>
            Gå vidare
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
