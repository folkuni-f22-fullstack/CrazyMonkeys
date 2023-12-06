import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import "../assets/Tillbehor.css";
import { FunkyContext } from "../../ContextRoot.jsx";



const Tillbehor = () => {
  const [tillbehorData, setTillbehorData] = useState([]);
  const { orderToSend, order, setOrder } = useContext(FunkyContext);
  const [itemCounter, setItemCounter] = useState(1);
  const [showTillbehorOverlay, setShowTillbehorOverlay] = useState(false);

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
        const sortedData = data.filter((item) => item.itemType === "tillbehör");
        setTillbehorData(sortedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = () => {
    setShowTillbehorOverlay(true);
    const existingOrder = order.find(
      (orderItem) => orderItem.itemId === foodId
    );

    if (existingOrder) {
      // Om drycken finns, öka antalet
      setOrder((prevOrder) =>
        prevOrder.map((orderItem) =>
          orderItem.itemId === foodId
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      // Om drycken inte finns, lägg till en ny order
      const newOrder = {
        itemId: foodId,
        quantity: 1,
      };
      setOrder((prevOrder) => [...prevOrder, newOrder]);
     
    }
    setItemCounter(itemCounter + 1);
    setTimeout(() => {
      setShowTillbehorOverlay(false);
    }, 2000);
  };

  return (
    <>
      <h3 className="tillbehor-title">Tillbehör</h3>
      <div className="tillbehor-container">
        {tillbehorData.map((tillbehor) => (
          <motion.div initial={{y: "-10%", opacity: 0 }} animate={{y: "0%", opacity: 1}} transition={{ duration: 1 }} className="tillbehor-item" key={tillbehor._id}>
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
                    handleAddToCart(tillbehor._id);
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
    </>
  );
};

export default Tillbehor;
