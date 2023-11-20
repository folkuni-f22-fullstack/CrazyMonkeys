import { useEffect, useState } from "react";
// import "./employeeStyle.css";
// import OrderKort from "../Components/anställda/OrderKort";
import OrderKort from "../../Components/anställda/OrderKort";
import "./chefsview.css";

export const Chefsview = () => {
  const [chartData, setChartData] = useState([]);
  const [menuNames, setMenuNames] = useState([]);
  const [orders, setOrders] = useState([]);

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

        let ordersList = [];
        ordersData.forEach((order) => {
          // hitta vilket menu item som tillhör id:t
          let newOrder = {};
          newOrder.id = order._id;
          newOrder.items = [];
          order.items.forEach((orderItem) => {
            let newOrderItem = menuData.find(
              (md) => md._id === orderItem.menuItem
            );
            newOrderItem.quantity = orderItem.quantity;
            console.log("orderItem:", newOrderItem);
            newOrder.items.push(newOrderItem);
          });
          // console.log(newOrder);
          ordersList.push(newOrder);
        });
        // console.log(ordersList);
        setOrders(ordersList);
        // console.log("orders", orders);
        const sortedData = menuData.filter(
          (item) => item.itemType === "food",
          "dricka",
          "tillbehör"
        );

        // Hämta alla menuItems från alla order
        const allMenuItems = ordersData.flatMap((order) => order.items);
        // console.log(allMenuItems);
        // Skapa en ny array med namn och quantity från menuData
        const menuItemsWithData = allMenuItems.map((orderItem) => {
          const menuItemData = sortedData.find(
            (apiItem) => apiItem._id === orderItem.menuItem
          );

          // console.log("orderItem.menuItem:", orderItem.menuItem);
          // console.log("menuItemData:", menuItemData._id);

          return {
            name: menuItemData ? menuItemData.name : "Namn ej tillgängligt",
            quantity: orderItem.quantity,
          };
        });

        setChartData(ordersData);
        setMenuNames(menuItemsWithData);

        // console.log("Menu", menuNames);

        // console.log("Order", ordersData);
        // console.log("Menu Items with Data", menuItemsWithData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-view-wrapper">
      <section className="employee-view-container">
        <header className="title-header">
          <span>Du är inloggad</span>
          <h1>Kockens Vy</h1>
          <div className="title-line" />
          <section className="tabs-section">
            <button
              className={chosenTab("untreated")}
              onClick={() => setSelectTab("untreated")}
            >
              Underbehandling
            </button>
           
            <button
              className={chosenTab("done")}
              onClick={() => setSelectTab("done")}
            >
              Färdig
            </button>
          </section>
        </header>

        {chartData.map((order) => (
          <div key={order._id} className="order-box">
            <span className="material-symbols-outlined">schedule</span>
            <p className="order-name">Ordernummer {order.orderId}</p>
            <button className="ongoing-btn">Under behandling </button>

       
            <details onClick={() => setSelectOrder({ order })}>
              <summary></summary>

              <div className="details-about-order">
                <hr /> <p>Meddelande från Anställd: <hr/> 
                Kunden vill ha extra sallad</p>

                {/* Render OrderKort outside the loop */}
                <OrderKort key={order.id} order={order} orders={orders} />

              </div>
            </details>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Chefsview;
