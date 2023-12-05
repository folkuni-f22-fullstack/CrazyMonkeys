import React, { useState, useContext } from "react";
import OrderKort from "../anställda/OrderKort";
import { updateOrder } from "../../dataApi/updateStatus&Msg.js";
import { FunkyContext } from "../../ContextRoot";

const UnderTreatmentOrder = ({ chartData, orders, moveOrder }) => {
    const [selectOrder, setSelectOrder] = useState({});
    const [orderStatus, setOrderStatus] = useState("");
    const { emplyeeStatus } = useContext(FunkyContext);

    const onSelectOrder = (order) => {
        setSelectOrder(order);
        setOrderStatus("done");
       
    };

    const onSubmitOrder = async (order) => {
       
        await moveOrder(order._id)
        const response = await updateOrder(orderStatus, order._id, ".");
    };

    return (
        <>
            {chartData.map((order) => (
                <div key={order._id} className="order-box">
                    <span className="material-symbols-outlined">lock</span>
                    <p className="order-name">Ordernummer {order.orderId}</p>
                    {/* <p>Kommentarer från kund: {order.comments}</p>  */}

                    {selectOrder._id === order._id ? (
                        <>
                            <details className="details treatment">
                                <summary
                                    className="summary"
                                    title={`Kika på order ${order.orderId}`}
                                >
                                    <button
                                        onClick={() => onSelectOrder({})}
                                        className="button-deselect"
                                    >
                                        Avmarkera
                                    </button>
                                </summary>
                                <div className="details-about-order">
                                    <div className="message-board">
                                        {emplyeeStatus === "chef" ? 
                                        <p>Denna kan inte redigeras...</p> :
                                        <p>Denna kan inte redigeras och finns hos kocken...</p> 
                                    }
                                    </div>
                                    <hr />
                                    {/* Render OrderKort outside the loop */}
                                    <OrderKort key={order.id} order={order} orders={orders} />
                                    <p>Kommentarer från anställd: {order.commentsEmployee}</p>

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

                                    {emplyeeStatus === "chef" && (
                                        <div className="button-to-right-div">
                                        <button
                                            className="button-confirm"
                                            type="submit"
                                            onClick={() => onSubmitOrder(order)}
                                        >
                                            Klar att servera
                                        </button>
                                        </div>
                                    )}
                                </div>
                            </details>
                        </>
                    ) : (
                        <div className="chef-done-div">
                            <button onClick={() => onSelectOrder(order)} className="button-mark">
                                Visa Order
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default UnderTreatmentOrder;
