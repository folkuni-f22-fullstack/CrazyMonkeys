import React, { useState } from "react";
import OrderKort from "../anställda/OrderKort";
import { updateOrder } from "../../dataApi/updateStatus&Msg.js";

const UnderTreatmentOrder = ({ chartData, orders }) => {
    const [selectOrder, setSelectOrder] = useState({});
    const [orderStatus, setOrderStatus] = useState("");


    const onSelectOrder = (order) => {
        setSelectOrder(order);

        setOrderStatus("during-treatment");
    };

    const onSubmitOrder = async (order) => {
        console.log(order._id);

        const response = await updateOrder(orderStatus, order._id);
    };

    return (
        <>
            {chartData.map((order) => (
                    <div key={order._id} className="order-box">
                        <span className="material-symbols-outlined">lock</span>
                        <p className="order-name">Ordernummer {order.orderId}</p>

                        {selectOrder._id === order._id ? (
                            <>
                                        <details className="details">
                                            <summary className="summary" title={`Kika på order ${order.orderId}`}>
                                                <button
                                                    onClick={() => onSelectOrder({})}
                                                    className="button-deselect"
                                                >
                                                    Avmarkera
                                                </button>
                                            </summary>

                                            <div className="details-about-order">
                                                <div className="message-board">
                                                    <p>Denna kan inte redigeras och finns hos kocken...</p>
                                                </div>
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
                        ) : (
                            <button onClick={() => onSelectOrder(order)} className="button-mark">
                                Visa Order
                            </button>
                        )}
                    </div>
            ))}
        </>
    );
};

export default UnderTreatmentOrder;
