import React, { useState, useContext, useEffect } from "react";
import "./orderKort.css";
import { removeOrderItem } from "../../dataApi/removeOrderItem.js";
import { postItemOrder } from "../../dataApi/postToOrder.js";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FunkyContext } from "../../ContextRoot";
import MenuEmployee from "./MenuEmployee.jsx";

export default function OrderKort(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [menuList, setMenuList] = useState([]);
    

    const { isEditing, selectedItemId, selectedItemQuantity, setSelectedItemQuantity, produktName, setProduktName } =
        useContext(FunkyContext);

    const additemInput = () => {
        setIsClicked(true);
    };
    useEffect(() => {
        const fetchData = async () => {
            const menuResponse = await fetch("/api/menu");
            const menuData = await menuResponse.json();
           
            setMenuList(menuData);
        };
        fetchData();
    }, []);

    const sendOrder = (orderId) => {
        async function handleOrderCompletion(whenDone) {
            // setProduktName("");
           
            await postItemOrder(orderId, selectedItemId, selectedItemQuantity, whenDone);

           

            async function whenDone() {
                await props.addOrderItem(orderId, selectedItemId, selectedItemQuantity);
                const nameFromMenu = menuList.find((item) => item._id === selectedItemId)?.name;
                setProduktName(nameFromMenu);
            }
        }
        handleOrderCompletion();
    };


    return (
        <article>
            <section>
                <div  className="customer-order">
                    <div key={props.order._id} className="order-card-header">
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
                        <div>
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
                            <button onClick={() => sendOrder(props.order._id)}>
                                Lägg till order
                            </button>
                        </div>
                    )}

                    {props.order.items &&
                        props.order.items.map((orderItem) => {
                            const menuItemData = props.orders
                                .flatMap((order) => order.items)
                                .find((menu) => menu._id === orderItem.menuItem);

                            const removeOrder = (itemOrderId) => {
                                props.deleteOrderItem(props.order._id, itemOrderId);
                                const response = removeOrderItem(props.order._id, itemOrderId);
                            };


                            return (
                                orderItem._id ? 
                                (<div key={orderItem._id}>
                                    <div className="order-card-list">
                                        <p>
                                            {menuItemData ? menuItemData.name : produktName} x{" "}
                                            {orderItem.quantity}
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
                                ) : "Laddar...."
                            );
                        })}
                </div>
            </section>
        </article>
    );
}
