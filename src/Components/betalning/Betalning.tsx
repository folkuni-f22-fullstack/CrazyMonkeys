import React, { useState, useContext } from "react";
import { FunkyContext } from "../../ContextRoot.tsx";
import { useNavigate } from "react-router-dom";

import "./betalning.css";
import { Link } from "react-router-dom";
import OrderComponent from "../Orders/OrderComponent.jsx"
import { StepsHeader } from "../StepsHeader/StepsHeader.jsx";



const CheckoutPage: React.FC<CheckoutProps> = () => {
  const navigate = useNavigate()

  const { orderToSend, customerInfo, order, selectStep, setSelectStep } = useContext(FunkyContext);

  const postCustomerOrder = async () => {
    const item = order.map(orderItem => {
        console.log('orderItem.ItemId:', orderItem.itemId);
        return {
            menuItem: orderItem.itemId,
            quantity: orderItem.quantity
        };
    });

    console.log("order", order);

    const orderTo = {
        orderId: orderToSend.orderId,
        customerName: customerInfo.name,
        adress: customerInfo.adress,
        floor: customerInfo.floor,
        portCode: customerInfo.portCode,
        mail: customerInfo.mail,
        mobile: customerInfo.mobile,
        items: item,
        comments: customerInfo.comments,
        status: customerInfo.status
    };

    try {
        const response = await fetch("api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderTo),
        });

        const data = await response.json();
        console.log("server response" + data);
    } catch (error) {
        console.error("Error:", error);
    }
};

const handleOrderPost = async (event) => {
  event.preventDefault();

  if (paymentMethod !== undefined) {
    console.log(orderToSend);
    // console.log("orderData", );
    try {
        await postCustomerOrder();
        navigate("/kvitto")
        setSelectStep(4)
    } catch (error) {
        console.error("Error:", error);
        // Hantera eventuella fel vid postning
    }
  }
  
};

  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    setButtonDisabled(false);
  };

  return (
    <div className="outer-container">

      <div className="checkout-container">
        <StepsHeader />
      <form onSubmit={handleOrderPost}>
        <header className="pay-header">
        <Link to="/leverans" className="go-back-btn" >
          <span className="material-symbols-outlined">undo</span>
        </Link>
        <h1>Välj betalningsmetod</h1>
        </header>


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

        <div className="pay-btn-div">
            <button type="submit" className="btn-grad" disabled={isButtonDisabled}>
              Slutför beställning
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
