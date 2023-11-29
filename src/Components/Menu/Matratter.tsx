import { useEffect, useState, useContext } from "react";
import "../assets/Matratter.css";
import { FunkyContext } from "../../ContextRoot";

const Matratter = () => {
  const [food, setFood] = useState([]);
  const { orderToSend, order, setOrder } = useContext(FunkyContext);
  const [itemCounter, setItemCounter] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);

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
        const sortedData = data.filter((item) => item.itemType === "food");
        setFood(sortedData);
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (foodId: string) => {
    setShowOverlay(true);
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
      setShowOverlay(false);
    }, 2000);
    
  };
  return (<>
    <div className="matratt-container">
      {food.map((matratt) => (
        <div className="matratt" key={matratt._id}>
          <h4 className="mattratter-title">{matratt.name}</h4>

          <div className="bottom-details">
            <img className="matratt-image" src={matratt.img} alt={matratt.name} />
            <p className="matratt-p">{matratt.desc}</p>
            <div className="price-and-button">
              <p className="menu-price"> {matratt.price} kr</p>
              <button
                className="order-button"
                onClick={() => handleAddToCart(matratt._id)}
              >
                Lägg till
              </button>
            </div>
          </div>
          {showOverlay && (
            <div className="menu-overlay">
              <p>Varan har lagts i varukorgen</p>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="matratt-container2">
      {food.map((matratt) => (
        <div className="matratt2" key={matratt._id}>
          <img className="matratt-image2" src={matratt.img} alt={matratt.name} />
          <div className="bottom-details2">
            <h4 className="mattratter-title2">{matratt.name}</h4>
            <p className="matratt-p2">{matratt.desc}</p>
            <div className="price-and-button2">
              <p className="menu-price2"> {matratt.price} :-</p>
              <button
                className="order-button2"
                onClick={() => handleAddToCart(matratt._id)}
              >
                Lägg till
              </button>
            </div>
          </div>

          {showOverlay && (
            <div className="menu-overlay">
              <p>Varan har lagts i kundvagnen</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Matratter;
