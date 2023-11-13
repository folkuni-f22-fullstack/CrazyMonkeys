import React, { useContext } from 'react';
import { FunkyContext } from '../ContextRoot.tsx';

const OrderComponent =  () => {
    const { orderToSend, customerInfo } = useContext(FunkyContext);

    const postCustomerOrder = async () => {

        console.log("du har klickat första");
        // const item = orderToSend.map(orderItem => ({
        //     menuItem: orderItem.ItemId,
        //     quantity: orderItem.quantity
        // }))

        if (Array.isArray(orderToSend)) {
            const itemsToSend = orderToSend.map(orderItem => ({
                menuItem: orderItem.itemId,
                quantity: orderItem.quantity
            }));
            // Använd itemsToSend här
        } else {
            // Om order inte är en array, hantera detta scenario
            console.error('Order is not an array');
        }

    
            const order = {
                orderId: customerInfo.orderId,
                adress: customerInfo.address,
                floor: customerInfo.floor,
                portCode: customerInfo.portCode,
                mail: customerInfo.email,
                mobile: customerInfo.mobile,
                items: item
            };
    
            try {
                const response = await fetch('api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(order)
                });
                
                console.log("du har klickat data");
                const data = await response.json();
                // Gör något med svar från posten om det behövs
            } catch (error) {
                console.log("du har klickat data");
                console.error('Error:', error);
                // Hantera eventuella fel vid postning
            }
        }
    

    const handleOrderPost = async () => {
        // console.log("orderData", );
        try {
            await postCustomerOrder();
            console.log("du har klickat sista");
        } catch (error) {
            console.error('Error:', error);
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
