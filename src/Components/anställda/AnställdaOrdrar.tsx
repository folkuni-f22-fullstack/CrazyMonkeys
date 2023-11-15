import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState } from "react";
import "./anställdaordrar.css";
// import {postCustomerOrder} from "../../dataApi/postOrder.jsx"
import OrderComponent from "../../dataApi/OrderComponent.jsx";

const Kundkorg = () => {
    const [chartData, setChartData] = useState([]);
    const [menuNames, setMenuNames] = useState([]);

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
                    const name = menuItemData ? menuItemData.name : "Namn ej tillgängligt"; // Anpassa detta efter din datamodell
                    return {
                        name,
                        quantity: orderItem.quantity,
                    };
                });

                setChartData(ordersData);
                setMenuNames(menuItemsWithData);

                console.log("Order", ordersData);
                console.log("Menu Items with Data", menuItemsWithData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

   

    return (
        <div className="chart-wrapper">
            <div className="background-chart">
                <div className="title-div">
                    <h1 className="chart-title">Beställningar</h1>
                    <hr />
                    <div className="title-section">
                        <p>Obehandlade</p>
                        <p>Underbehandling</p>
                        <p>Obehandlade</p>
                    </div>
                </div>
                {/* <div className="order-group" key={customerInfo.orderId}>
                    <p>Ordernummer:{customerInfo.orderId}</p>
                    <button>Bekräfta</button>
                    <button>Neka</button>
                    <button onClick={() => handleModifyOrder(customerInfo.orderId)}>Ändra</button>
                </div> */}
                {chartData.map((order) => (
                    <div className="order-line" key={order._id}>
                        {/* Kundinformation */}
                        <div className="customer-info">
                            <p className="customer-name">Kund: {order.customerName}</p>
                            <p className="customer-address">Adress: {order.adress}</p>
                        </div>

                        {/* Maträttinformation */}
                        {order.items.map((item) => {
                            const menuItemData = menuNames.find(
                                (menu) => menu._id === item.menuItem
                            );

                            return (
                                <div key={item._id} className="food-info">
                                    <div className="food-name-div">
                                        <p className="foodname">
                                        Maträtt: {menuItemData ? menuItemData[0].name : "Namn ej tillgängligt"}
                                        </p>
                                    </div>

                                    <div className="price-div">
                                        <h4 className="price-title">Pris</h4>
                                        <span className="foodprice">
                                            {/* Lägg till prisinformation här om tillgängligt */}
                                        </span>
                                    </div>

                                    <div className="amount-order">
                                        <span className="amount">Antal: {item.quantity}</span>
                                        {/* Lägg till logik för att justera kvantitet här */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}

                <hr className="line" />
                <p className="total-summa">Totalsumma:</p>
                {/* <button onClick={klick}>klicka mig</button> */}
                <OrderComponent />
            </div>
        </div>
    );
};

export default Kundkorg;
