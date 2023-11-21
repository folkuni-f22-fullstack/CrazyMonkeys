import { useEffect, useState, useContext } from "react";
import "../assets/Dryck.css";
import { FunkyContext } from "../../ContextRoot";

const Dryck = () => {
  const [dryckData, setDryckData] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [itemCounter, setItemCounter] = useState(1);
  const { orderToSend, order, setOrder } = useContext(FunkyContext);

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
        const response = await fetch("/api/menu");
        if (!response.ok) {
          throw new Error("Något gick fel");
        }
        const data = await response.json();
        const sortedData = data.filter((item) => item.itemType === "dricka");
        setDryckData(sortedData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (dryckId: string) => {
    const existingOrder = order.find(
      (orderItem) => orderItem.itemId === dryckId
    );

    if (existingOrder) {
      setOrder((prevOrder) =>
        prevOrder.map((orderItem) =>
          orderItem.itemId === dryckId
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      const newOrder = {
        itemId: dryckId,
        quantity: 1,
      };
      setOrder((prevOrder) => [...prevOrder, newOrder]);
    }
    setItemCounter(itemCounter + 1);
  };

  return (
    <>
    <h2 className="rubrik">Välj din drink</h2>
    <div className="dryck-container">
      
      <div className="dryck-column">
        {/* <h2>Kolsyrade</h2> */}
        {dryckData.map(
          (dryck, index) =>
            index % 2 === 0 && (
              <div className="dryck-item" key={dryck._id}>
                <div className="dryck-details">
                  <div className="drink-name">
                    <h3 className="meny-h3">{dryck.name} ............ </h3>
                  </div>
                  <p> {dryck.price} kr</p>
                </div>

                <div className="quantity-controls">
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
                <div className="dryck-details">
                  <div className="drink-name">
                    <h3 className="meny-h3">{dryck.name} .............. </h3>
                  </div>
                  <p className="me"> {dryck.price} kr</p>
                </div>

                <div className="quantity-controls">
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
    </div>
    </>
  );
};

export default Dryck;
