import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
import { FunkyContext } from "../../ContextRoot";
import "./StyleVarukorg.css";
import { useNavigate, Link } from "react-router-dom";
import { StepsHeader } from "../../Components/StepsHeader/StepsHeader";

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

    const handleAddToCart = (foodId, quantityChange) => {
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
        <div className="cart-wrapper">
            <div className="cart">
                <StepsHeader />
                <header className="cart-header">
                <Link to="/menu" className="back-btn">
                    <span className="material-symbols-outlined">undo</span>
                </Link>
                <h1 className="cart-title">Varukorg</h1>
                </header>
                        {
                            chartData.length === 0 ? (
                                <p className="empty-cart-text">
                                    Din kundkorg är tom!
                                </p>
            ) : (
                <div className="cart-container">
                    <header className="cart-items-header">
                        <p className="header-name">Namn</p>
                        <p className="header-price">Pris</p>
                        <p className="header-amount">Antal</p>
                    </header>
                    <div className="cart-items">
                        {
                            chartData.map((order) => (
                                <>
                                    <div className="cart-item">
                                        <p className="item-name">{order.name}</p>
                                        <p className="item-price">{order.price} :-</p>
                                        <div className="item-amount-container">
                                            <button className="item-minus-btn" onClick={() => handleAddToCart(order._id, -1)}>-</button>
                                            <p className="item-amount">
                                                {orderToSend.items.find(
                                                        (item) => item.menuItem === order._id
                                                    )?.quantity || 0}</p>
                                            <button className="item-plus-btn" onClick={() => handleAddToCart(order._id, 1)}>+</button>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            ))
                        }
                    </div>

                </div>
            )
        }
            {
                        chartData.length === 0 ? (
                        <button className="btn-grad" onClick={() => onSubmitButton(false)}>
                        Gå tillbaka till menyn
                        </button>) : (
                            <>
                                <p className="total-summa">Totalsumma: {totalSum} :-</p>
                                <button className="btn-grad" onClick={() => onSubmitButton(true)}>
                                    Gå vidare
                                </button>
                            </>
                        )
                }
            </div>
        </div>
    );
};

export default Varukorg;