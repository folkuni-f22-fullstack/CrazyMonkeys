import React from "react";
import "./orderKort.css"
export default function OrderKort(props) {
    console.log("orderjox: ", props.order);

    return (
        <article>
            <section>
                <div className="customer-order">
                    <h2>Kundens Order</h2>
                    {props.order.items && props.order.items.map((orderItem) => {
                        // Find the corresponding menu item in orders
                        const menuItemData = props.orders
                            .flatMap((order) => order.items)
                            .find((menu) => menu._id === orderItem.menuItem);

                        console.log("orderItem.Name", menuItemData ? menuItemData.name : "Namn ej tillgängligt");

                        return (
                            <div key={orderItem._id}>
                                <p>
                                    {menuItemData ? menuItemData.name : "Namn ej tillgängligt"} x {orderItem.quantity}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <p> </p>
            </section>
        </article>
    );
}



