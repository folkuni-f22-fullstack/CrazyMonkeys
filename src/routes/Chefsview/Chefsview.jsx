import { useEffect, useState, useContext } from "react";
import OrderKort from "../../Components/anställda/OrderKort";
import "./chefsview.css";
import UnderTreatmentOrder from "../../Components/Orders/underTreatmentOrder";
import { FunkyContext } from "../../ContextRoot";

export const Chefsview = () => {
  const [chartData, setChartData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectTab, setSelectTab] = useState("untreated");
 const [menuNames, setMenuNames] = useState([]);
 const [duringTreatmentData, setDuringTreatmentData] = useState([]);
 const {isLoggedIn} = useContext(FunkyContext)

  const chosenTab = (tab) => {
    return selectTab === tab ? "selected-tab" : "unselected-tab";
  };




  const onSubmit = (event) => {
    event.preventDefault();


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

           
            const duringTreatmentOrder = ordersData.filter(order => order.status === "during-treatment")
       

            
            let ordersList = [];
            
            //DuringTreatment
            duringTreatmentOrder.forEach((order) => {
                // hitta vilket menu item som tillhör id:t
                let newOrder = {};
                newOrder.id = order._id;
                newOrder.items = [];
                order.items.forEach((orderItem) => {
                    let newOrderItem = menuData.find((md) => md._id === orderItem.menuItem);
                    newOrderItem.quantity = orderItem.quantity;
                    // console.log("orderItem:", newOrderItem);
                    newOrder.items.push(newOrderItem);
                });
               ;
                ordersList.push(newOrder);
            });

       
          
            setOrders(ordersList);
            setDuringTreatmentData(duringTreatmentOrder)
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);

  return (
   
    <div className="employee-view-wrapper">
         {
        isLoggedIn ? (
        
            <section className="employee-view-container">
        <header className="title-header">
          <span>Du är inloggad</span>
          <h1 className="chefsview-title">Kockens Vy</h1>
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

            <UnderTreatmentOrder chartData={duringTreatmentData} orders={orders}/>
           
      
      </section>
    ) : (
        <section className="employee-view-not-logged-in">
                    <header className="title-header">
                        <span>Du är inte inloggad</span>
                    </header>
                   </section>
    )

}
    </div>
    );
};

export default Chefsview;
