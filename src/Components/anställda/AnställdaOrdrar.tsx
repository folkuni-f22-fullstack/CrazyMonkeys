import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
import { FunkyContext } from "../../ContextRoot";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./anställdaordrar.css";
// import {postCustomerOrder} from "../../dataApi/postOrder.jsx"
import OrderComponent from "../../dataApi/OrderComponent.jsx"

const Kundkorg = () => {
    const { orderToSend, customerInfo } = useContext(FunkyContext);
    const [chartData, setChartData] = useState([]);
    const handleModifyOrder = (orderId) => {

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/menu");
                if (!response.ok) {
                    throw new Error("Något gick fel");
                }
                const data = await response.json();
                const orderIds = orderToSend.items.map((item) => item.menuItem);
                const sortedOrder = data.filter((item) => orderIds.includes(item._id));

                setChartData(sortedOrder);
                // console.log(chartData);
                // console.log("OrderIds:" + orderIds);
            } catch (error) {
                console.error(error);
            }
        };

        
        fetchData();
    }, [orderToSend.items]);

    // const klick = async () => {
    //     try{
    //         const data = await postCustomerOrder()

    //     }catch(error){
    //         console.error(error);
            
    //     }
    // };

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
                {chartData.map((order) => (
                    <>
                            {/* <div className="order-group" key={customerInfo.orderId}>
                                <p>Ordernummer:{customerInfo.orderId}</p>
                                <button>Bekräfta</button>
                                <button>Neka</button>
                                <button onClick={() => handleModifyOrder(customerInfo.orderId)}>Ändra</button>
                            </div> */}
                        <div className="order-line">

                            <div className="food-name-div">
                                <p className="foodname">{order.name}</p>
                                <p className="foodname">{customerInfo.name}</p>
                                <p className="foodname">{customerInfo.adress}</p>
                            </div>


                            <div className="price-div">
                                <h4 className="price-title">Pris</h4>{" "}
                                <span className="foodprice">{order.price}</span>
                            </div>

                            <div className="amount-order">
                                <span className="amount">Antal</span>
                                <div className="minus-plus">
                                    <BiMinus className="minus" />
                                    <span className="amount-food">
                                        {orderToSend.items.find(
                                            (item) => item.menuItem === order._id
                                        )?.quantity || 0}{" "}
                                    </span>
                                    <BiPlus className="plus" />
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <hr className="line" />
                <p className="total-summa">Totalsumma:</p>
                {/* <button onClick={klick}>klicka mig</button> */}
                <OrderComponent/>
            </div>
        </div>
    );
};

export default Kundkorg;
