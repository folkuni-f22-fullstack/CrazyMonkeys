import { useState, useRef, createContext } from "react";
export const FunkyContext = createContext();

const ContextRoot = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        adress: "",
        floor: "",
        portCode: "",
        mail: "",
        mobile: "",
        comments:""
    });

    const orderToSend = {
        orderId: Math.floor(Math.random() * 100) + 1,
        customer: customerInfo.name,
        adress: customerInfo.adress,
        floor: customerInfo.floor,
        portCode: customerInfo.portCode,
        mail: customerInfo.mail,
        mobile: customerInfo.mobile,
        comments: customerInfo.comments,
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

    return (
        <FunkyContext.Provider
            value={{
                stateLoginDialog, loginDialogRef,
                orderToSend,
                order,
                setOrder,
                customerInfo,
                setCustomerInfo, isLoggedIn, setIsLoggedIn
            }}
        >
            {children}
        </FunkyContext.Provider>
    );
};

export default ContextRoot;
