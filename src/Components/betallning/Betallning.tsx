import React, { useState } from "react";
import "./betallning.css";
import { StepsHeader } from "../StepsHeader/StepsHeader";
import { useNavigate } from "react-router-dom";

interface CheckoutProps {}

const CheckoutPage: React.FC<CheckoutProps> = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    setButtonDisabled(false);
  };

  const navigate = useNavigate();

  const handleProceed = () => {
    console.log("Gå vidare med betalningen för", paymentMethod);
  };

  return (
    <>
   
      <div className="outer-container">
        <div className="checkout-container">
          <StepsHeader/>
          <h2 className="checkout">Checkout</h2>

          <div className="payment-method">
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={handlePaymentChange}
              />
              Kort.
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
              Swish
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
              Kassa
            </label>
          </div>

          <button
            className="proceed-button"
            
            onClick={() => { navigate("/kvitto"); } } to={"/kvitto"}>
            Gå vidare
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
