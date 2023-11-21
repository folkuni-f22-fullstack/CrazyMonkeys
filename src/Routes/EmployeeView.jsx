import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {FunkyContext} from "../ContextRoot"

import "./employeeStyle.css";

import OrderKort from "../Components/anställda/OrderKort";

export const EmployeeView = () => {
    const navigate = useNavigate();

    // Login
    const { setIsLoggedIn, isLoggedIn } = useContext(FunkyContext);


    // Data
    const [chartData, setChartData] = useState([]);
    const [menuNames, setMenuNames] = useState([]);
    const [orders, setOrders] = useState([]);

    // Tabs
    const [selectTab, setSelectTab] = useState("untreated");

    const chosenTab = (tab) => {
        return selectTab === tab ? "selected-tab" : "unselected-tab";
    };

    // Send to cook
    const [isLocked, setIsLocked] = useState(false);

    const [msgToCook, setMsgToCook] = useState("");

    const onChangeTextArea = (event) => {
        setMsgToCook(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        // if selectOrder is selected and has an object of an order, do this: if "skicka till kocken" button is clicked, send the order with "info till kocken" textarea text to "kockens vy" (if there is any message)
    };

    // Select order
    const [selectOrder, setSelectOrder] = useState({});

    const onSelectOrder = (order) => {
        setSelectOrder(order)
    }

    // Edit order
    const [editOrder, setEditOrder] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    const onEditOrder = (order) => {
        setEditOrder(order)
        setIsEditing(true)
    }

    const saveEditedOrder = () => {
        setEditOrder({})
        setIsEditing(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Hämta orderdata
                const ordersResponse = await fetch("/api/orders");
                const menuResponse = await fetch("/api/menu");

                if (!ordersResponse.ok || !menuResponse.ok) {
                    throw new Error("Något gick fel");
                }

                const ordersData = await ordersResponse.json();
                const menuData = await menuResponse.json();

                let ordersList = [];
                ordersData.forEach((order) => {
                    // hitta vilket menu item som tillhör id:t
                    let newOrder = {};
                    newOrder.id = order._id;
                    newOrder.items = [];
                    order.items.forEach((orderItem) => {
                        let newOrderItem = menuData.find((md) => md._id === orderItem.menuItem);
                        newOrderItem.quantity = orderItem.quantity;
                        console.log("orderItem:", newOrderItem);
                        newOrder.items.push(newOrderItem);
                    });
                    // console.log(newOrder);
                    ordersList.push(newOrder);
                });
                // console.log(ordersList);
                setOrders(ordersList);
                // console.log("orders", orders);
                const sortedData = menuData.filter(
                    (item) => item.itemType === "food",
                    "dricka",
                    "tillbehör"
                );

                // Hämta alla menuItems från alla order
                const allMenuItems = ordersData.flatMap((order) => order.items);
                // console.log(allMenuItems);
                // Skapa en ny array med namn och quantity från menuData
                const menuItemsWithData = allMenuItems.map((orderItem) => {
                    const menuItemData = sortedData.find(
                        (apiItem) => apiItem._id === orderItem.menuItem
                    );

                    // console.log("orderItem.menuItem:", orderItem.menuItem);
                    // console.log("menuItemData:", menuItemData._id);

                    return {
                        name: menuItemData ? menuItemData.name : "Namn ej tillgängligt",
                        quantity: orderItem.quantity,
                    };
                });

                setChartData(ordersData);
                setMenuNames(menuItemsWithData);

                // console.log("Menu", menuNames);

                // console.log("Order", ordersData);
                // console.log("Menu Items with Data", menuItemsWithData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const onClickLogOut = () => {
        setIsLoggedIn(false);
        navigate("/");
      };

    return (
        <div className="employee-view-wrapper">
            {
                isLoggedIn ? (
            <section className="employee-view-container">
                <header className="title-header">
                    <span>Du är inloggad</span>
                    <button onClick={onClickLogOut} className="btn-grad">
                        logga ut
                    </button>
                    <h1>Beställningar</h1>
                    <div className="title-line" />
                    <section className="tabs-section">
                        <button
                            className={chosenTab("untreated")}
                            onClick={() => setSelectTab("untreated")}
                        >
                            Obehandlade
                        </button>
                        <button
                            className={chosenTab("during-treatment")}
                            onClick={() => setSelectTab("during-treatment")}
                        >
                            Underbehandling
                        </button>
                        <button className={chosenTab("done")} onClick={() => setSelectTab("done")}>
                            Färdig
                        </button>
                    </section>
                </header>

                {chartData.map((order) => (
                    <div key={order._id} className="order-box">
                            <span className="material-symbols-outlined">schedule</span>
                            <p className="order-name">Ordernummer {order.orderId}</p>
                            
                        {
                            selectOrder._id === order._id ? (
                                <>  
                                    {
                                        editOrder._id === order._id ? (
                                            <>
                                            {isLocked ? (
                                                <p className="send-to-cook-text">Skickar till kocken...</p>
                                            ) : (
                                                <>
                                                {
                                                    isEditing ? (
                                                        <>
                                                            <button className="button-edit" type="submit" onClick={() => saveEditedOrder()}>Slutför ändring</button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <button className="button-decline">Neka</button>
                                                            <button onClick={() => onSelectOrder({})} className="button-unmark">Avmarkera</button>
                                                        </>
                                                    )
                                                }
                                                </>
   
                                            )}
                                            
                    
                                            <details>
                                                <summary></summary>
                    
                                                <div className="details-about-order">
                                                    <hr />
                                                    {/* Render OrderKort outside the loop */}
                                                    <OrderKort key={order.id} order={order} orders={orders} /> <button>Ändra</button>

                                                    <details>
                                                        <summary className="summary-box">Info om kund</summary>
                                                        
                                                        <div>
                                                            <label htmlFor="customerNameInput">Namn: </label> <input id="customerNameInput" type="text" value={order.customerName} />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="customerAddressInput">Address: </label> <input id="customerAddressInput" type="text" value={order.adress} />
                                                        </div>
                                                        
                                                        <div>
                                                            <label htmlFor="customerFloorInput">Våning: </label><input id="customerFloorInput" type="number" value={order.floor} />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="customerPortCodeInput">Portkod: </label><input id= "customerPortCodeInput" type="number" value={order.portCode} />
                                                        </div>
                                                     
                                                        <div>
                                                            <label htmlFor="customerEmailInput">Mejl: </label> <input id="customerEmailInput" type="email" value={order.mail}  />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="customerPhoneInput">Telefonnummer: </label>
                                                            <input id="customerPhoneInput" type="number" value={order.mobile}/>
                                                        </div> 
                                                    </details>
                                                </div>
                                            </details>
                                            </>
                                        ) : (
                                            <>
                                            {isLocked ? (
                                                <p className="send-to-cook-text">Skickar till kocken...</p>
                                            ) : (
                                                <>
                                                    <button className="button-decline">Neka</button>
                                                    <button className="button-edit" onClick={() => onEditOrder(order)}>Ändra</button>
                                                </>
                                            )}
                                            <button onClick={() => onSelectOrder({})} className="button-unmark">Avmarkera</button>
                    
                                            <details>
                                                <summary></summary>
                    
                                                <div className="details-about-order">
                                                    <hr />
                                                    {/* Render OrderKort outside the loop */}
                                                    <OrderKort key={order.id} order={order} orders={orders} />
                    
                                                    <details>
                                                        <summary className="summary-box">Meddela kocken</summary>
                                                        <textarea
                                                            onChange={onChangeTextArea}
                                                            className="msg-to-cook-textarea"
                                                            placeholder="Meddelande till kocken"
                                                        />
                                                    </details>
                    
                                                    <details>
                                                        <summary className="summary-box">Info om kund</summary>
                                                        <p>Namn: {order.customerName} </p>
                                                        <p>Adress: {order.adress} </p>
                                                        <p>Våning: {order.floor} </p>
                                                        <p>Portkod: {order.portCode} </p>
                                                        <p>Mejl: {order.mail} </p>
                                                        <p>Telefonnummer: {order.mobile} </p>
                                                        <p>Kommentarer från kund: {order.comments}</p>
                                                    </details>
                    
                                                    <button
                                                        className="button-confirm"
                                                        type="submit"
                                                        onClick={() => setIsLocked(true)}
                                                    >
                                                        Skicka till kocken{" "}
                                                        {isLocked && (
                                                            <span className="material-symbols-outlined">lock</span>
                                                        )}
                                                    </button>
                                                </div>
                                            </details>
                                            </>
                                        )
                                    }


                                </>
                            ) : (
                                <button onClick={() => onSelectOrder(order)}className="button-mark">Markera</button>
                            )
                        }

                    </div>
                ))}
            </section>
                ) : (
                   <section className="employee-view-not-logged-in">
                    <header className="title-header">
                        <span>Du är inte inloggad</span>
                    </header>
                   </section>
                )
            }
        </div>
    );
};
