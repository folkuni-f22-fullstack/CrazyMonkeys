import React, { useState } from "react";
import "./orderKort.css";
import { removeOrderItem } from "../../dataApi/removeOrderItem.js";
import { IoAddCircleSharp } from "react-icons/io5";
export default function OrderKort(props) {
    const [isClicked, setIsClicked] = useState(false);

    const additemInput = () => {};

    return (
        <article>
            <section>
                <div className="customer-order">
                    <div className="order-card-header">
                        <h2>Kundens Order</h2>
                        {props.order.status === "untreated" && (
                            <button className="add-item-to-order-btn">
                                <IoAddCircleSharp size={30} />
                            </button>
                        )}
                    </div>
                    {props.order.items &&
                        props.order.items.map((orderItem) => {
                            // Find the corresponding menu item in orders
                            const menuItemData = props.orders
                                .flatMap((order) => order.items)
                                .find((menu) => menu._id === orderItem.menuItem);

                            const removeOrder = (itemOrderId) => {
                                console.log(props.order.status, itemOrderId);
                                const response = removeOrderItem(props.order._id, itemOrderId);
                            };

                            return (
                                <div key={orderItem._id}>
                                    <div className="order-card-list">
                                        <p>
                                            {menuItemData
                                                ? menuItemData.name
                                                : "Namn ej tillgängligt"}{" "}
                                            x {orderItem.quantity}
                                        </p>
                                        {props.order.status === "untreated" && (
                                            <div className="remove-order-div">
                                                <button
                                                    onClick={() => removeOrder(orderItem.menuItem)}
                                                >
                                                    Ta bort vara
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                </div>
                <p> </p>
            </section>
        </article>
    );
}
