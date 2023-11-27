import React, { useState, useContext } from "react";
import "./orderKort.css";
import { removeOrderItem } from "../../dataApi/removeOrderItem.js";
import { postItemOrder } from "../../dataApi/postToOrder.js";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FunkyContext } from "../../ContextRoot";
import MenuEmployee from "./MenuEmployee.jsx";

export default function OrderKort(props) {
    
    const [isClicked, setIsClicked] = useState(false);
    const { isEditing, selectedItemId, selectedItemQuantity, setSelectedItemQuantity } =
        useContext(FunkyContext);

    const additemInput = () => {
        setIsClicked(true);
    };

    
    const sendOrder = (orderId) => {
        console.log("order", props.order);
        console.log("orders", props.orders);
        console.log(orderId, selectedItemId, selectedItemQuantity);
        // async function doSomething (whenDone)  {
            
        //     whenDone()
        // }
        
          postItemOrder(orderId, selectedItemId, selectedItemQuantity, whenDone)
        props.addOrderItem(orderId, selectedItemId, selectedItemQuantity,)
    };

    return (
        <article>
            <section>
                <div className="customer-order">
                    <div className="order-card-header">
                        <h2>Kundens Order</h2>
                        {props.order.status === "untreated" && isEditing && (
                            <>
                                {isClicked ? (
                                    <button
                                        onClick={() => setIsClicked(false)}
                                        className="add-item-to-order-btn"
                                    >
                                        <IoIosCloseCircle color="#F08282" size={30} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setIsClicked(true)}
                                        className="add-item-to-order-btn"
                                    >
                                        <IoAddCircleSharp size={30} />
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    {props.order.status === "untreated" && isEditing && isClicked && (
                        <div >
                            <div className="new-order-div">
                                <MenuEmployee />
                                <div className="new-order-input-div">
                                    <label htmlFor="quantity">Antal</label>
                                    <input
                                        onChange={(e) => setSelectedItemQuantity(e.target.value)}
                                        name="quantity"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <button onClick={() => sendOrder(props.order._id)}>Lägg till order</button>
                        </div>
                    )}

                    {props.order.items &&
                        props.order.items.map((orderItem) => {
                            
                            const menuItemData = props.orders
                                .flatMap((order) => order.items)
                                .find((menu) => menu._id === orderItem.menuItem);

                            const removeOrder = (itemOrderId) => {
                                console.log(props.order.status, itemOrderId);
                                props.deleteOrderItem(props.order._id, itemOrderId)
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
                                        {props.order.status === "untreated" && isEditing && (
                                            <div className="remove-order-div">
                                                <button
                                                    onClick={() => removeOrder(orderItem.menuItem)}
                                                >
                                                    Ta bort vara
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    {props.order.status === "untreated" && isEditing && <hr />}
                                </div>
                            );
                        })}
                </div>
                <p> </p>
            </section>
        </article>
    );
}
