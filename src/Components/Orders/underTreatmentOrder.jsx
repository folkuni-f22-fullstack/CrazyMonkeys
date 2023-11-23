import React, { useState } from "react";
import OrderKort from "../anställda/OrderKort";
import { updateOrder } from "../../dataApi/updateOrder.js";

const UnderTreatmentOrder = ({ chartData, orders }) => {
    const [isLocked, setIsLocked] = useState(false);
    const [selectOrder, setSelectOrder] = useState({});
    const [msgToCook, setMsgToCook] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const onChangeTextArea = (event) => {
        setMsgToCook(event.target.value);
    };

    const onSelectOrder = (order) => {
        setSelectOrder(order);

        setOrderStatus("during-treatment");
    };

    const onSubmitOrder = async (order) => {
        console.log(order._id);

        const response = await updateOrder(orderStatus, order._id);
    };

    // Edit order
    const [editOrder, setEditOrder] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const onEditOrder = (order) => {
        setEditOrder(order);
        setIsEditing(true);
    };

    const saveEditedOrder = () => {
        setEditOrder({});
        setIsEditing(false);
    };

    // Cancel order
    const cancelOrder = (orderId) => {
        chartData.filter((order) => order._id !== orderId);
        // Cancel order will remove the selected order from the chart array.
        // TODO: Update chartData
    };

    return (
        <>
                <div className="order-box-wrapper">
            {chartData.map((order) => (
                    <div key={order._id} className="order-box">
                        <span className="material-symbols-outlined">schedule</span>
                        <p className="order-name">Ordernummer {order.orderId}</p>

                        {selectOrder._id === order._id ? (
                            <>
                                {editOrder._id === order._id ? (
                                    <>
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
                                                            value={order.customerName}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="customerAddressInput">
                                                            Address:{" "}
                                                        </label>{" "}
                                                        <input
                                                            id="customerAddressInput"
                                                            type="text"
                                                            value={order.adress}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="customerFloorInput">
                                                            Våning:{" "}
                                                        </label>
                                                        <input
                                                            id="customerFloorInput"
                                                            type="number"
                                                            value={order.floor}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="customerPortCodeInput">
                                                            Portkod:{" "}
                                                        </label>
                                                        <input
                                                            id="customerPortCodeInput"
                                                            type="number"
                                                            value={order.portCode}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="customerEmailInput">
                                                            Mejl:{" "}
                                                        </label>{" "}
                                                        <input
                                                            id="customerEmailInput"
                                                            type="email"
                                                            value={order.mail}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="customerPhoneInput">
                                                            Telefonnummer:{" "}
                                                        </label>
                                                        <input
                                                            id="customerPhoneInput"
                                                            type="number"
                                                            value={order.mobile}
                                                        />
                                                    </div>
                                                </details>
                                            </div>
                                        </details>
                                    </>
                                ) : (
                                    <>
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
                                                <p>Kommentarer från anställd: {order.commentsEmployee}</p>

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
                                            </div>
                                        </details>
                                    </>
                                )}
                            </>
                        ) : (
                            <button onClick={() => onSelectOrder(order)} className="button-mark">
                                Visa Order
                            </button>
                        )}
                    </div>
            ))}
            </div>
        </>
    );
};

export default UnderTreatmentOrder;
