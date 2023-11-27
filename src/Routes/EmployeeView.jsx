import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {FunkyContext} from "../ContextRoot"
import {handleLogout} from "../Components/Login/loginFetch.js"

import "./employeeStyle.css";

import OrderKort from "../Components/anställda/OrderKort";
import UntreatedOrder from "../Components/Orders/untreatedOrder.jsx";
import UnderTreatmentOrder from "../Components/Orders/underTreatmentOrder.jsx";

export const EmployeeView = () => {
    const navigate = useNavigate();

    // Login
    const { setIsLoggedIn, isLoggedIn } = useContext(FunkyContext);


    // Data
    const [untreatedData, setUntreatedData] = useState([]);
    const [duringTreatmentData, setDuringTreatmentData] = useState([]);
    const [doneData, setDoneData] = useState([]);
    const [orders, setOrders] = useState([]);

    // Tabs
    const [selectTab, setSelectTab] = useState("untreated");
    const [viewTab, setView] = useState("untreated");

    const chosenTab = (tab) => {
        return selectTab === tab ? "selected-tab" : "unselected-tab";
    };


    useEffect(() => {
        setView(selectTab)
       

    },[selectTab])

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

                const untreadedOrder = ordersData.filter(order => order.status === "untreated")
                const duringTreatmentOrder = ordersData.filter(order => order.status === "during-treatment")
                const doneOrder = ordersData.filter(order => order.status === "done")

            
                
                let ordersList = [];
                //Untreadedorder
                untreadedOrder.forEach((order) => {
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

                //Done
                doneOrder.forEach((order) => {
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
                setUntreatedData(untreadedOrder);
                setDuringTreatmentData(duringTreatmentOrder)
                setDoneData(doneOrder)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const onClickLogOut = () => {
        handleLogout()
        setIsLoggedIn(false);
        navigate("/");
      };

    return (
        <div className="employee-view-wrapper">
            {
                isLoggedIn ? (
                    <section className="employee-view-container">
                <header className="title-header">
                    <span>Du är inloggad</span>
                    <button onClick={onClickLogOut} className="btn-grad">
                        logga ut
                    </button>
                    <h1>Anställdas vy</h1>
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
                            Under behandling
                        </button>
                        <button className={chosenTab("done")} onClick={() => setSelectTab("done")}>
                            Färdig
                        </button>
                    </section>
                </header>

                {viewTab === "untreated" && (
                    <UntreatedOrder chartData={untreatedData} orders={orders}/>)}
                {viewTab === "during-treatment" && (
                    <UnderTreatmentOrder chartData={duringTreatmentData} orders={orders}/>)}
                {viewTab === "done" && (
                    <UntreatedOrder chartData={doneData} orders={orders}/>)}

                {/* Det som ska göras är att vi ska ha olika Chartdata där vi hämtar
                ordrar beroende på vad för status dem har.
                
                1. Lägg en "status" objekt i orderModellen som har "Obehandlade" som standard.
                2. hämta ordrar beroende på status.
                3. gör en PUT req som ändrar "status" när man klickar på skicka till kocken och den ska hamna i "Under behandlade".
                */}


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