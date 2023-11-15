import { useState, createContext, useRef } from "react";
export const FunkyContext = createContext();
const ContextRoot = ({ children }) => {
  // Orders
  const [order, setOrder] = useState([]);

  const orderToSend = {
    customerName: "Abbe",
    items: order.map((orderItem) => ({
      menuItem: orderItem.itemId,
      quantity: orderItem.quantity,
    })),
  };

  // Login
  const loginDialogRef = useRef();

  const stateLoginDialog = (state: boolean) => {
    if (state) {
        // show() eller showModal()
      loginDialogRef.current.showModal();
    } else {
      loginDialogRef.current.close();
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <FunkyContext.Provider
      value={{ loginDialogRef, stateLoginDialog, orderToSend, order, setOrder, isLoggedIn, setIsLoggedIn}}
    >
      {children}
    </FunkyContext.Provider>
  );
};

export default ContextRoot;
