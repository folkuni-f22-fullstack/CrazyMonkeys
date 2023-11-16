import React, { useState } from "react";
import "./betallning.css";
import { Link } from "react-router-dom";
import OrderComponent from "../../dataApi/OrderComponent"
interface CheckoutProps {}

const CheckoutPage: React.FC<CheckoutProps> = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    setButtonDisabled(false);
  };

  const handleProceed = () => {
    console.log("Gå vidare med betalningen för", paymentMethod);
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
              checked={paymentMethod === "card"}
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
              checked={paymentMethod === "swish"}
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
              checked={paymentMethod === "cash"}
              onChange={handlePaymentChange}
            />
            Vid upphämtning
          </label>
        </div>

        <div >
          <Link to="/kvitto">
            <button className="btn-grad" disabled={isButtonDisabled}>
            </button>
          </Link>
              <OrderComponent/>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
