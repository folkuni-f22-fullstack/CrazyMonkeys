import { useState, useRef, createContext, useEffect } from "react";
export const FunkyContext = createContext();

const ContextRoot = ({ children }) => {
    // Delivery states
        // Inputs
        const [deliveryFirstName, setDeliveryFirstName] = useState("");
        const [deliveryLastName, setDeliveryLastName] = useState("");
        const [deliveryEmail, setDeliveryEmail] = useState("");
        const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState("");
        const [deliveryOwnComments, setDeliveryOwnComments] = useState("");
        const [deliveryAddress, setDeliveryAddress] = useState("");
        const [deliveryCounty, setDeliveryCounty] = useState("");
        const [deliveryApartmentNumber, setDeliveryApartmentNumber] = useState("");
        const [deliveryPostNumber, setDeliveryPostNumber] = useState("");
        const [deliveryFloor, setDeliveryFloor] = useState("");
        const [deliveryPortCode, setDeliveryPortCode] = useState("");
        const [recipeId, setRecipeId] = useState();


    // States
    const [isEditing, setIsEditing] = useState(false);
    const [updateState, setUpdateState] = useState(1);
    const [order, setOrder] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState("")
    const [selectedItemQuantity, setSelectedItemQuantity] = useState("")
    const [emplyeeStatus, setEmployeeStatus] = useState("")
    const [orderPrice, setTotalPrice] = useState("0");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [chosenDeliveryOption, setChosenDeliveryOption] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        adress: "",
        floor: "",
        portCode: "",
        mail: "",
        mobile: "",
        comments:"",
        status: ""
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
        status: customerInfo.status
    };


    // Steps
    const [selectStep, setSelectStep] = useState(1)

    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");

        if (jwt) {
            setIsLoggedIn(true);
        }
    }, []);

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

    const [loginFailedMsg, setLoginFailedMsg] = useState(false)

    return (
        <FunkyContext.Provider
            value={{
                stateLoginDialog, loginDialogRef,
                orderToSend,
                order,
                setOrder,
                customerInfo,
                setCustomerInfo, isLoggedIn, setIsLoggedIn, selectStep, setSelectStep, orderPrice, setTotalPrice,isEditing, setIsEditing, selectedItemId, setSelectedItemId,selectedItemQuantity, setSelectedItemQuantity,
                deliveryFirstName, setDeliveryFirstName, deliveryLastName, setDeliveryLastName, deliveryEmail, setDeliveryEmail, deliveryPhoneNumber, setDeliveryPhoneNumber, deliveryOwnComments, setDeliveryOwnComments, deliveryAddress, setDeliveryAddress, deliveryCounty, setDeliveryCounty, deliveryApartmentNumber, setDeliveryApartmentNumber, deliveryPostNumber, setDeliveryPostNumber, deliveryFloor, setDeliveryFloor, deliveryPortCode, setDeliveryPortCode, updateState, setUpdateState,emplyeeStatus, setEmployeeStatus,
                chosenDeliveryOption, setChosenDeliveryOption, recipeId, setRecipeId, loginFailedMsg, setLoginFailedMsg
            }}
        >
            {children}
        </FunkyContext.Provider>
    );
};

export default ContextRoot;
