import { useEffect, useState } from "react";
import "./employeeStyle.css";
export const EmployeeView = () => {
    const [chartData, setChartData] = useState([]);
    const [menuNames, setMenuNames] = useState([]);

    const [selectTab, setSelectTab] = useState("untreated");
    const [isLocked, setIsLocked] = useState(false);

    const chosenTab = (tab) => {
        return selectTab === tab ? "selected-tab" : "unselected-tab";
    };

    const [selectOrder, setSelectOrder] = useState({});

    const [msgToCook, setMsgToCook] = useState("");

    const onChangeTextArea = (event) => {
        setMsgToCook(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        // if selectOrder is selected and has an object of an order, do this: if "skicka till kocken" button is clicked, send the order with "info till kocken" textarea text to "kockens vy" (if there is any message)
    };

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

                // Hämta alla menuItems från alla order
                const allMenuItems = ordersData.flatMap((order) => order.items);

                // Skapa en ny array med namn och quantity från menuData
                const menuItemsWithData = allMenuItems.map((orderItem) => {
                    const menuItemData = menuData.find(
                        (apiItem) => apiItem._id === orderItem.menuItem
                    );

                    console.log("orderItem.menuItem:", orderItem.menuItem);
                    console.log("menuItemData:", menuItemData);

                    return {
                        name: menuItemData ? menuItemData.name : "Namn ej tillgängligt",
                        quantity: orderItem.quantity,
                    };
                });

                setChartData(ordersData);
                setMenuNames(menuItemsWithData);

                // console.log("Order", ordersData);
                // console.log("Menu Items with Data", menuItemsWithData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="employee-view-container">
            <header className="title-header">
                <span>Du är inloggad</span>
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

            {selectTab === "untreated" && (
                <section>
                    <form onSubmit={onSubmit}>
                        {chartData.map((order) => {
                            return (
                                <div key={order._id} className="order-box">
                                    <span className="material-symbols-outlined">schedule</span>
                                    <p className="order-name">Ordernummer {order.orderId}</p>

                                    {isLocked ? (
                                        <span>Skickar till kocken...</span>
                                    ) : (
                                        <>
                                            <button className="button-decline">Neka</button>
                                            <button className="button-edit">Ändra</button>
                                        </>
                                    )}

                                    <details onClick={() => setSelectOrder({ order })}>
                                        <summary></summary>

                                        <div className="details-about-order">
                                            <hr />

                                            {order.items.map((item) => {
                                                const menuItemData = menuNames.find(
                                                    (menu) => menu._id === item.menuItem
                                                );

                                                // console.log("item.menuItem:", item.menuItem);
                                                // console.log("menuNames:", menuNames);
                                                // console.log("item.menuItem:", item.menuItem);
                                                // console.log("menuItemData:", menuItemData);

                                                return (
                                                    <div key={item._id}>
                                                        <p>
                                                            Maträtt: {item.quantity} x{" "}
                                                            {menuItemData
                                                                ? menuItemData.name
                                                                : "Namn ej tillgängligt"}
                                                        </p>
                                                    </div>
                                                );
                                            })}

                                            {/* Lägg till logik för Tillbehör, Drycker, Summa och Kundkommentar här */}

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
                                            </details>

                                            <button
                                                className="button-confirm"
                                                type="submit"
                                                onClick={() => setIsLocked(true)}
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
                                </div>
                            );
                        })}
                    </form>
                    <hr />
                </section>
            )}
        </section>
    );
};
