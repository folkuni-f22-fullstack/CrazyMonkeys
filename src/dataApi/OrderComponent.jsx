import React, { useContext } from "react";
import { FunkyContext } from "../ContextRoot.tsx";

const OrderComponent = () => {
    const { orderToSend, customerInfo, order } = useContext(FunkyContext);

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

    const handleOrderPost = async () => {
        console.log(orderToSend);
        // console.log("orderData", );
        try {
            await postCustomerOrder();
        } catch (error) {
            console.error("Error:", error);
            // Hantera eventuella fel vid postning
        }
    };

    return (
        <div>
            {/* ... ditt JSX-innehåll och användning av handleOrderPost */}
            <button onClick={handleOrderPost}>Skicka beställning</button>
        </div>
    );
};

export default OrderComponent;
