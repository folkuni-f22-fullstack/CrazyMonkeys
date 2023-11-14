import { useState, createContext } from "react";
export const FunkyContext = createContext () 
const ContextRoot = ({children}) => {
    const [order, setOrder] = useState([]);

    const orderToSend = {
        customerName: "Abbe",
        items: order.map(orderItem => ({
          menuItem: orderItem.itemId,
          quantity: orderItem.quantity
        }))
      };

    return (
        <FunkyContext.Provider value={{orderToSend, order, setOrder}}>{children}</FunkyContext.Provider> 
    )
} 

export default ContextRoot