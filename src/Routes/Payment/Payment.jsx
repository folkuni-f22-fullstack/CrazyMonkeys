import React, { useState, useContext } from "react";
import { FunkyContext } from "../../ContextRoot.jsx";
import { useNavigate } from "react-router-dom";

import "./paymentStyle.css";
import { Link } from "react-router-dom";
import OrderComponent from "../../Components/Orders/OrderComponent.jsx"
import { StepsHeader } from "../../Components/StepsHeader/StepsHeader.jsx";



const Payment = () => {
  const navigate = useNavigate()

  const { orderToSend, customerInfo, order, selectStep, setSelectStep, setRecipeId } = useContext(FunkyContext);

  const postCustomerOrder = async () => {
    const item = order.map(orderItem => {
      
        return {
            menuItem: orderItem.itemId,
            quantity: orderItem.quantity
        };
    });

    

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
        console.log(orderTo);
       
        setRecipeId(data.orderId)
    } catch (error) {
        console.error("Error:", error);
    }
};

const handleOrderPost = async (event) => {
  event.preventDefault();

  if (paymentMethod !== undefined) {
    
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

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    setButtonDisabled(false);
  };

  const goBackToDelivery = () => {
    navigate("/leverans")
    setSelectStep(2)
  }

  const goBackToMenu = () => {
    navigate("/menu")
  }

  return (
    <div className="pay-wrapper">
      <div className="pay">
      <button onClick={() => goBackToDelivery()} className="back-btn"><span className="material-symbols-outlined">undo</span>
      </button>
      <h1 className="pay-title mobile">Betalningsmetod</h1>
      <StepsHeader />
      <header className="pay-header">
          <h1 className="pay-title">Betalningsmetod</h1>
      </header>
      <div className="pay-container">
        {orderToSend.items.length > 0 && (

                  <form className="pay-form" onSubmit={handleOrderPost}>
                    <div>
                    <input id="method-card-input"
                          type="radio"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={handlePaymentChange}
                        />
                      <label className="pay-label" htmlFor="method-card-input">Bank- eller kontantkort</label>
                    </div>
            
                    <div>
                    <input id="method-swish-input"
                          type="radio"
                          value="swish"
                          checked={paymentMethod === "swish"}
                          onChange={handlePaymentChange}
                        />
                      <label className="pay-label" htmlFor="method-swish-input">Swish</label>
                    </div>
            
                    <div>
                    <input id="method-cash-input"
                          type="radio"
                          value="cash"
                          checked={paymentMethod === "cash"}
                          onChange={handlePaymentChange}
                        />
                      <label className="pay-label" htmlFor="method-cash-input">Vid upphämtning</label>
                    </div>
            
                    <div className="pay-btn-div">
                        <button type="submit" className="btn-grad" disabled={isButtonDisabled}>
                          Slutför beställning
                        </button>
                    </div>
              </form>
 
        )}
        {
          !orderToSend.items.length && (
            <>
               <p>För att slutföra en beställning behöver du ha fyllt varukorgen och skrivit in dina leveransuppgifter!</p>
                <div className="pay-btn-div">
                  <button onClick={() => goBackToMenu()} className="btn-grad">
                          Gå tillbaka till menyn
                        </button>
                    </div>
            </>
          )
        }
      </div>
      </div>
    </div>
  );
};

export default Payment;
