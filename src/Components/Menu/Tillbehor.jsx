import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import "../assets/Tillbehor.css";
import { FunkyContext } from "../../ContextRoot.jsx";
import { useNavigate } from "react-router-dom";

const Tillbehor = ({setSelectedItems}) => {
    const [tillbehorData, setTillbehorData] = useState([]);
    const { orderToSend, order, setOrder } = useContext(FunkyContext);
    const [itemCounter, setItemCounter] = useState(1);
    const [showTillbehorOverlay, setShowTillbehorOverlay] = useState(false);
    const [cartOrder, setCartOrder] = useState([]);
    const navigate = useNavigate();

    //   const addOrder = () => {
    //     const newOrder = {
    //       itemId: orderId,
    //       quantity: itemCounter,
    //     };

    //     setOrder((prevOrder) => [...prevOrder, newOrder]);
    //   };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/menu"); // Använd /api/menu för att utnyttja proxyen
                if (!response.ok) {
                    throw new Error("Något gick fel");
                }
                const data = await response.json();
                const sortedData = data.filter((item) => item.itemType === "tillbehör");
                setTillbehorData(sortedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = async (foodId) => {
        setShowTillbehorOverlay(true);

        const existingOrder = order.find((orderItem) => orderItem.itemId === foodId);

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
            setSelectedItems((prevSelected) => [...prevSelected, { itemId: foodId, quantity: 1 }]);
        }
        setItemCounter(itemCounter + 1);
        setTimeout(() => {
            setShowTillbehorOverlay(false);
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
            <h3 className="tillbehor-title">Tillbehör</h3>
            <div className="tillbehor-container">
                {tillbehorData.map((tillbehor) => (
                    <motion.div
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="tillbehor-item"
                        key={tillbehor._id}
                    >
                        <div className="tillbehor-img">
                            <img src={tillbehor.img} alt="" />
                        </div>
                        <div className="border-container">
                            <h3 className="card-title">{tillbehor.name}</h3>
                            <p className="desc">{tillbehor.desc}</p>
                        </div>
                        <div className="tillbehor-price-n-btn">
                            <h4 className="tillbehor-price">{tillbehor.price}:-</h4>
                            <button
                                className="add-to-cart-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToCart(tillbehor._id, e);
                                }}
                            >
                                Lägg till
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            {showTillbehorOverlay && (
                <div className="tillbehor-overlay">
                    <p>Varan har lagts till i varukorgen</p>
                </div>
            )}
            {/* <div className="order-btn-grad-div">
                <button className="btn-grad" onClick={handleAddAllToCart}>
                    {" "}
                    Gå till varukorg
                </button>
            </div> */}
        </>
    );
};
export default Tillbehor;