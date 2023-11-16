import { useState, createContext } from "react";
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
    });

    const orderToSend = {
        orderId: Math.floor(Math.random() * 100) + 1,
        customer: customerInfo.name,
        adress: customerInfo.adress,
        floor: customerInfo.floor,
        portCode: customerInfo.portCode,
        mail: customerInfo.mail,
        mobile: customerInfo.mobile,
        items: order.map((orderItem) => ({
            menuItem: orderItem.itemId,
            quantity: orderItem.quantity,
        })),
    };
    
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
                stateLoginDialog,
                orderToSend,
                order,
                setOrder,
                customerInfo,
                setCustomerInfo,
            }}
        >
            {children}
        </FunkyContext.Provider>
    );
};

export default ContextRoot;
