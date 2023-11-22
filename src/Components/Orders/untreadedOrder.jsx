import React, { useState, useEffect } from "react";
import OrderKort from "../anställda/OrderKort";
import { updateOrder } from "./updateOrder.js";
import { updateCustomerInfo } from "./updateCustomerInfo.js";

const UntreadOrder = ({ chartData, orders }) => {
    const [isLocked, setIsLocked] = useState(false);
    const [selectOrder, setSelectOrder] = useState({});
    const [msgToCook, setMsgToCook] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const [orderId, setOrderId] = useState(); // State-variabel för order._id
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerFloor, setCustomerFloor] = useState("");
    const [customerPortCode, setCustomerPortCode] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");



    // const selectedOrder = chartData.find((item) => item._id === orderId);

    // useEffect(() => {
    //     if (selectedOrder) {
    //         setCustomerName(selectedOrder.customerName);
    //         setCustomerAddress(selectedOrder.address);
    //         setCustomerFloor(selectedOrder.floor);
    //         setCustomerPortCode(selectedOrder.portCode);
    //         setCustomerEmail(selectedOrder.mail);
    //         setCustomerPhone(selectedOrder.mobile);
    //     }
    // }, [selectedOrder]);

    const onChangeTextArea = (event) => {
        setMsgToCook(event.target.value);
    };

    const onSelectOrder = (order) => {
        setSelectOrder(order);
        setOrderId(order._id);

        setOrderStatus("during-treatment");
    };

    const onSubmitOrder = async (order) => {
        console.log(order._id);
        console.log(customerName);
        console.log(orderId);

        const response = await updateOrder(orderStatus, order._id, msgToCook);
    };


    const test = (order) => {
        setCustomerName(order.customerName)
        setCustomerAddress(order.adress)
        setCustomerFloor(order.floor)
        setCustomerPortCode(order.portCode)
        setCustomerEmail(order.mail)
        setCustomerPhone(order.mobile)
        setOrderId(order._id)
        onSelectOrder(order)
    }

    // Edit order
    const [editOrder, setEditOrder] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const onEditOrder = (order) => {
        setEditOrder(order);
        setIsEditing(true);
    };

    const saveEditedOrder = async (order) => {
        // console.log();
        // setEditOrder({});
        // setIsEditing(false);
        const response = await updateCustomerInfo(
            order._id,
            customerName,
            customerAddress,
            customerFloor,
            customerPortCode,
            customerEmail,
            customerPhone)
            console.log("frontend: res", order._id);
    };


    const cancelOrder = (orderId) => {
        chartData.filter((order) => order._id !== orderId);
    };

    return (
        <>
            {chartData.map((order) => (
                <div key={order._id} className="order-box">
                    <span className="material-symbols-outlined">schedule</span>
                    <p className="order-name">Ordernummer {order.orderId}</p>

                    {selectOrder._id === order._id ? (
                        <>
                            {editOrder._id === order._id ? (
                                <>
                                    {isLocked ? (
                                        <p className="send-to-cook-text">Skickar till kocken...</p>
                                    ) : (
                                        <>
                                            {isEditing ? (
                                                <>
                                                    <button
                                                        className="button-edit"
                                                        type="submit"
                                                        onClick={() => saveEditedOrder(order)}
                                                    >
                                                        Slutför ändring
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        className="button-decline"
                                                        onClick={() => cancelOrder(order._id)}
                                                    >
                                                        Neka
                                                    </button>
                                                    <button
                                                        onClick={() => onSelectOrder({})}
                                                        className="button-unmark"
                                                    >
                                                        Avmarkera
                                                    </button>
                                                </>
                                            )}
                                        </>
                                    )}

                                    <details>
                                        <summary></summary>

                                        <div className="details-about-order">
                                            <hr />
                                            {/* Render OrderKort outside the loop */}
                                            <OrderKort
                                                key={order.id}
                                                order={order}
                                                orders={orders}
                                            />{" "}
                                            <button>Ändra</button>
                                            <details>
                                                <summary className="summary-box">
                                                    Info om kund
                                                </summary>

                                                <div>
                                                    <label htmlFor="customerNameInput">
                                                        Namn:{" "}
                                                    </label>{" "}
                                                    <input
                                                        id="customerNameInput"
                                                        type="text"
                                                        value={customerName}
                                                        onChange={(e) => setCustomerName(e.target.value)}

                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="customerAddressInput">
                                                        Address:{" "}
                                                    </label>{" "}
                                                    <input
                                                        id="customerAddressInput"
                                                        type="text"
                                                        value={customerAddress}
                                                        onChange={(e) => setCustomerAddress(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="customerFloorInput">
                                                        Våning:{" "}
                                                    </label>
                                                    <input
                                                        id="customerFloorInput"
                                                        type="number"
                                                        value={customerFloor}
                                                        onChange={(e) => setCustomerFloor(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="customerPortCodeInput">
                                                        Portkod:{" "}
                                                    </label>
                                                    <input
                                                        id="customerPortCodeInput"
                                                        type="number"
                                                        value={customerPortCode}
                                                        onChange={(e) => setCustomerPortCode(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="customerEmailInput">
                                                        Mejl:{" "}
                                                    </label>{" "}
                                                    <input
                                                        id="customerEmailInput"
                                                        type="email"
                                                        value={customerEmail}
                                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="customerPhoneInput">
                                                        Telefonnummer:{" "}
                                                    </label>
                                                    <input
                                                        id="customerPhoneInput"
                                                        type="number"
                                                        value={customerPhone}
                                                        onChange={(e) => setCustomerPhone(e.target.value)}
                                                    />
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
                                            <button
                                                className="button-edit"
                                                onClick={() => onEditOrder(order)}
                                            >
                                                Ändra
                                            </button>
                                        </>
                                    )}
                                    <button
                                        onClick={() => onSelectOrder({})}
                                        className="button-unmark"
                                    >
                                        Avmarkera
                                    </button>

                                    <details>
                                        <summary></summary>

                                        <div className="details-about-order">
                                            <hr />
                                            {/* Render OrderKort outside the loop */}
                                            <OrderKort
                                                key={order.id}
                                                order={order}
                                                orders={orders}
                                            />

                                            <details>
                                                <summary className="summary-box">
                                                    Meddela kocken
                                                </summary>
                                                <textarea
                                                    onChange={onChangeTextArea}
                                                    className="msg-to-cook-textarea"
                                                    placeholder="Meddelande till kocken"
                                                />
                                            </details>

                                            <details>
                                                <summary className="summary-box">
                                                    Info om kund
                                                </summary>
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
                                                onClick={() => onSubmitOrder(order)}
                                            >
                                                Skicka till kocken{" "}
                                                {isLocked && (
                                                    <span className="material-symbols-outlined">
                                                        lock
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </details>
                                </>
                            )}
                        </>
                    ) : (
                        <button onClick={() => test(order)} className="button-mark">
                            Markera
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default UntreadOrder;
