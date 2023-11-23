import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
import { FunkyContext } from "../../ContextRoot";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./StyleVarukorg.css";
import { useNavigate, Link } from "react-router-dom";
import { StepsHeader } from "../StepsHeader/StepsHeader";

const Varukorg = () => {
    const navigate = useNavigate();

    const { orderToSend, setSelectStep, setOrder, order } = useContext(FunkyContext);
    const [chartData, setChartData] = useState([]);


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
                console.log(chartData);
                // console.log("OrderIds:" + orderIds);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [orderToSend.items]);

    const handleAddToCart = (foodId: string, quantityChange: number) => {
        const updatedOrder = order.map((orderItem) =>
            orderItem.itemId === foodId
                ? { ...orderItem, quantity: orderItem.quantity + quantityChange }
                : orderItem
        );

        // Ta bort produkten från varukorgen om dess kvantitet blir 0
        const filteredOrder = updatedOrder.filter((orderItem) => orderItem.quantity > 0);

        setOrder(filteredOrder);
    };

    const onSubmitButton = (state) => {
        setOrder(order);
        console.log(chartData);
        if (orderToSend.items.length > 0 && state) {
            navigate("/leverans");
            setSelectStep(2);
        } else {
            console.log("Välj en artikel för att gå vidare!");
            navigate("/menu")
        }

    };

    const totalSum = chartData.reduce((acc, order) => acc + order.price * (orderToSend.items.find(item => item.menuItem === order._id)?.quantity || 0), 0);


    return (
        <div className="chart-wrapper">
            <div className="background-chart">
                <StepsHeader />
                <header className="cart-header">
                <Link to="/menu" className="back-btn">
                            <RiArrowGoBackFill size={30} />
                </Link>
                <h1 className="chart-title">Kundkorg</h1>
                </header>

                {
                    chartData.length === 0 ? (
                        <p className="empty-cart-text">
                            Din kundkorg är tom!
                        </p>
                    ) : (
                        chartData.map((order) => (
                            <>
                                <div className="order-line">
                                    <div className="food-name-div">
                                        <h2 className="foodname">{order.name}</h2>
                                    </div>
        
                                    <div className="price-div">
                                        <h4 className="price-title">Pris</h4>{" "}
                                        <span className="foodprice">{order.price}</span>
                                    </div>
        
                                    <div className="amount-order">
                                        <span className="amount">Antal</span>
                                        <div className="minus-plus">
                                            <button className="minus-btn" onClick={() => handleAddToCart(order._id, -1)}>
                                                <BiMinus className="minus" />
                                            </button>
                                            <span className="amount-food">
                                                {orderToSend.items.find(
                                                    (item) => item.menuItem === order._id
                                                )?.quantity || 0}
                                            </span>
                                            <button className="plus-btn" onClick={() => handleAddToCart(order._id, 1)}>
                                                <BiPlus className="plus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    )
                }

                <div className="line-div">
                    <hr className="line" />
                </div>
                <p className="total-summa">Totalsumma: {totalSum} Kr</p>
                <div className="chart-btn-grad">
                    {
                        chartData.length === 0 ? (
                        <button className="btn-grad" onClick={() => onSubmitButton(false)}>
                        Gå tillbaka till menyn
                        </button>) : (
                            <button className="btn-grad" onClick={() => onSubmitButton(true)}>
                                Gå vidare
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Varukorg;
