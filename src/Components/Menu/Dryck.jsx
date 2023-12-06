import { useEffect, useState, useContext } from "react";
import "../assets/Dryck.css";
import { FunkyContext } from "../../ContextRoot";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dryck = ({setSelectedItems}) => {
    const [dryckData, setDryckData] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [itemCounter, setItemCounter] = useState(1);
    const { orderToSend, order, setOrder } = useContext(FunkyContext);
    const [showDrinkOverlay, setShowDrinkOverlay] = useState(false);
    const [orderOverlay, setOrderOverlay] = useState(null);
    const [cartOrder, setCartOrder] = useState([]);
    const navigate = useNavigate();

    const addOrder = () => {
        const newOrder = {
            itemId: orderId,
            quantity: itemCounter,
        };

        setOrder((prevOrder) => [...prevOrder, newOrder]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/menu"); // Använd /api/menu för att utnyttja proxyen
                if (!response.ok) {
                    throw new Error("Något gick fel");
                }
                const data = await response.json();
                const sortedData = data.filter((item) => item.itemType === "dricka");
                setDryckData(sortedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = async (dryckId) => {
        setShowDrinkOverlay(true);
        setOrderOverlay(dryckId);

        const existingOrder = order.find((orderItem) => orderItem.itemId === dryckId);

        if (existingOrder) {
            // If the item already exists in the order, increase the quantity
            setOrder((prevOrder) =>
                prevOrder.map((orderItem) =>
                    orderItem.itemId === foodId
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                )
            );
        } else {
            // If the item doesn't exist, add it to the selectedItems array
            setSelectedItems((prevSelected) => [...prevSelected, { itemId: dryckId, quantity: 1 }]);
        }
        setItemCounter(itemCounter + 1);
        setTimeout(() => {
            setShowDrinkOverlay(false);
        }, 2000);
    };

    // const handleAddAllToCart = () => {
    //     const updatedOrder = [...order, ...selectedItems];
    //     setOrder(updatedOrder);
    //     setCartOrder(updatedOrder);
    //     navigate("/varukorg");
    // };

    return (
        <>
            <h2 className="rubrik">Drycker</h2>
            <div className="dryck-container">
                <div className="dryck-column">
                    {/* <h2>Kolsyrade</h2> */}
                    {dryckData.map(
                        (dryck, index) =>
                            index % 2 === 0 && (
                                <motion.div
                                    initial={{ y: "-10%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="dryck-item"
                                    key={dryck._id}
                                >
                                    <div className="drink-container">
                                        <p className="meny-p">{dryck.name} </p>
                                    </div>
                                    <div className="price-and-btn">
                                        <p className="meny-price-p"> {dryck.price}:-</p>
                                        <button
                                            className="quantity-button"
                                            onClick={() => handleAddToCart(dryck._id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </motion.div>
                            )
                    )}
                </div>

                <div className="dryck-column">
                    {/* <h2>Öl</h2> */}
                    {dryckData.map(
                        (dryck, index) =>
                            index % 2 !== 0 && (
                                <motion.div
                                    initial={{ y: "-10%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="dryck-item"
                                    key={dryck._id}
                                >
                                    <div className="drink-container">
                                        <p className="meny-p">{dryck.name} </p>
                                    </div>
                                    <div className="price-and-btn">
                                        <p className="meny-price-p"> {dryck.price}:-</p>
                                        <button
                                            className="quantity-button"
                                            onClick={() => handleAddToCart(dryck._id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </motion.div>
                            )
                    )}
                    {showDrinkOverlay && (
                        <div className="drink-overlay">
                            <p>Varan har lagts i kundvagnen</p>
                        </div>
                    )}
                </div>
                {/* <div className="order-btn-grad-div">
                    <button className="btn-grad" onClick={handleAddAllToCart}>
                        {" "}
                        Gå till varukorg
                    </button>
                </div> */}
            </div>
        </>
    );
};

export default Dryck;
