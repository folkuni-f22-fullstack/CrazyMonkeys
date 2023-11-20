
import React, { useState } from 'react';
import OrderKort from '../anställda/OrderKort';

const UntreadOrder = ({ chartData, orders}) => {
    const [isLocked, setIsLocked] = useState(false);
    const [selectOrder, setSelectOrder] = useState({});
    const [msgToCook, setMsgToCook] = useState('');

    const onChangeTextArea = (event) => {
        setMsgToCook(event.target.value);
    };

    const onSelectOrder = (order) => {
        setSelectOrder(order)
    }

    return (
        <>
            {chartData.map((order) => (
                <div key={order._id} className="order-box">
                    <span className="material-symbols-outlined">schedule</span>
                    <p className="order-name">Ordernummer {order.orderId}</p>

                    {selectOrder._id === order._id ? (
                        <>
                            {isLocked ? (
                                <p className="send-to-cook-text">Skickar till kocken...</p>
                            ) : (
                                <>
                                    <button className="button-decline">Neka</button>
                                    <button className="button-edit">Ändra</button>
                                </>
                            )}
                            <button onClick={() => onSelectOrder({})} className="button-unmark">
                                Avmarkera
                            </button>

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
                                        Skicka till kocken{' '}
                                        {isLocked && (
                                            <span className="material-symbols-outlined">lock</span>
                                        )}
                                    </button>
                                </div>
                            </details>
                        </>
                    ) : (
                        <button onClick={() => onSelectOrder(order)} className="button-mark">
                            Markera
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default UntreadOrder;
