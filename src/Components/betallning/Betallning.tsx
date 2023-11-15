import React, { useState } from "react";
import "../Style/betallning.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { StepsHeader } from "../StepsHeader/StepsHeader";

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
    <>
      <Header />
      <div className="outer-container">
        <div className="checkout-container">
          <StepsHeader/>
          <h2>Checkout</h2>

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
            onClick={handleProceed}
            disabled={isButtonDisabled}
          >
            Gå vidare
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
