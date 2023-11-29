import { useEffect, useState, useContext } from "react";
import "../assets/Dryck.css";
import { FunkyContext } from "../../ContextRoot";

const Dryck = () => {
  const [dryckData, setDryckData] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [itemCounter, setItemCounter] = useState(1);
  const { orderToSend, order, setOrder } = useContext(FunkyContext);

  const [showDrinkOverlay, setShowDrinkOverlay] = useState(false);

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

  const handleAddToCart = (dryckId: string) => {
    setShowDrinkOverlay(true);
    const existingOrder = order.find(
      (orderItem) => orderItem.itemId === dryckId
    );

    if (existingOrder) {
      // Om drycken finns, öka antalet
      setOrder((prevOrder) =>
        prevOrder.map((orderItem) =>
          orderItem.itemId === dryckId
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      // Om drycken inte finns, lägg till en ny order
      const newOrder = {
        itemId: dryckId,
        quantity: 1,
      };
      setOrder((prevOrder) => [...prevOrder, newOrder]);
    }
    setItemCounter(itemCounter + 1);
    setTimeout(() => {
      setShowDrinkOverlay(false);
    }, 9000);
  };

  return (
    <>
      <h2 className="rubrik">Drycker</h2>
      <div className="dryck-container">
        <div className="dryck-column">
          {/* <h2>Kolsyrade</h2> */}
          {dryckData.map(
            (dryck, index) =>
              index % 2 === 0 && (
                <div className="dryck-item" key={dryck._id}>
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
                </div>
              )
          )}
        </div>

        <div className="dryck-column">
          {/* <h2>Öl</h2> */}
          {dryckData.map(
            (dryck, index) =>
              index % 2 !== 0 && (
                <div className="dryck-item" key={dryck._id}>
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
                  {showDrinkOverlay && (
            <div className="drink-overlay">
              <p>Varan har lagts i kundvagnen</p>
            </div>
          )}
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Dryck;
